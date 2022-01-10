import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from '../../store/actions';
import Header from '../header';
import Footer from '../footer';

export default () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState();

    const [click, setClick] = useState(false);
    const [random, setRandom] = useState(0);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadInfo = async () => {
            const log = await (
                await fetch('http://localhost:3000/get-request', { 'Content-Type': 'application/json' })
            ).json();
            setLogin(log.login === true);
            setData(log?.data);
        };
        loadInfo();
    }, []);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000/web-socket');
        ws.onopen = () => ws.send('start-random');

        ws.onmessage = (e) => {
            const { value } = JSON.parse(e.data);
            setProgress(value);
        };
    }, []);

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 100));
    }, [click]);

    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);
    return (
        <>
            <Header />
            <h2>Counter</h2>
            {login && <h2>You have logged</h2>}
            {data && <pre>{data}</pre>}
            <div>Number: {number}</div>
            <button onClick={() => dispatch(setCounter(number + 1))}>Inc</button>
            <br />
            <button onClick={() => dispatch(setCounter(number - 1))}>Dec</button>
            <br />
            <button onClick={() => setClick((state) => !state)}>Random</button>
            {random && <h2 data-testid="random">{random}</h2>}
            <Footer value={progress} />
        </>
    );
};

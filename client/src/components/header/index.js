import React, { useState, useEffect } from 'react';

export default () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const loadName = async () => {
            const name = await (await fetch('http://localhost:3000/get-name')).json();
            setName(name.name);
        };
        loadName();
    }, []);
    return <>{name ? <h1>Hello, {name}</h1> : <h1>I dont know your name</h1>}</>;
};

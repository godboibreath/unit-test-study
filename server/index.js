const http = require('http-server');
const express = require('express');

const app = express();

app.listen(3000, (err) => {
    if (err) {
        console.log('Fatal not started');
    }
    console.log('Started');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Access-Token, Content-Type, Accept');
    console.log('Have got get request by url: ', req.url);
    next();
});

app.get('/get-request', (req, res) => {
    res.send(
        JSON.stringify({
            data: [1, 2, 3, 4, 5],
            login: true,
        }),
    );
    console.log(
        'Sended data: ',
        JSON.stringify({
            data: [1, 2, 3, 4, 5],
            login: true,
        }),
    );
});

app.get('/get-name', (req, res) => {
    const arrayName = ['Oleg', 'Sasha', 'Lera', 'Asia'];
    const data = JSON.stringify({
        name: arrayName[Math.floor(Math.random() * arrayName.length)],
    });
    res.send(data);
    console.log('Sended data: ', data);
});

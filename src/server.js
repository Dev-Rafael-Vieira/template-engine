const express = require("express");
const server = express();
server.use(express.static('public'));

server.set('view engine', 'pug');


server.get('/', (req, res)=> {
    res.render(
        'index', {
            title: 'Template Engine',
            logoimg: '/images/pug.png',

        });
});

server.get('/Comofunciona', (req, res)=> {
    res.render(
        'comofunciona', {
            title: 'Template Engine',
            logoimg: '/images/pug.png',

        });
});

server.get('/Conclusao', (req, res)=> {
    res.render(
        'conclusao', {
            title: 'Template Engine',
            logoimg: '/images/pug.png',

        });
});

 server.listen(3333); 
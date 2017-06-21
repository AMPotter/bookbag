'use strict';
require('dotenv').config();
const superAgent = require('superagent');
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.PSQL_CONSTRING;
const client = new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/api/results/:titleString', (request, response) => {
    console.log('request params: ' + request.params.titleString);
    superAgent
        .get(`https://tastedive.com/api/similar?q=book:${request.params.titleString}&k=${process.env.TASTEDIVE_TOKEN}&info=1`)
        .end((err, res) => response.send(res.text));
});

app.get('*', (request, response) => {
    response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

function loadBookbag() {
    
}

app.post('/shelf', function(request, response) {
    client.query(
        'INSERT INTO bookbag(name, type, teaser, url) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING',
        []
    )
})



function loadDB() {
    client.query(`
        CREATE TABLE IF NOT EXISTS
        bookbag (
            book_id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(4),
            teaser LONGTEXT,
            url VARCHAR(255)
        );
    `)
        .then(loadBookbag)
        .catch(console.error);
}


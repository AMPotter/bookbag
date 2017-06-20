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

// function proxyTasteDive(request, response) {
//     console.log('Routing TasteDive request for ' + request.params[0]);
//     console.log('Response: ' + response);
//     (requestProxy({
//         url: `https://tastedive.com/api/similar?q=book:call+of+the+wild&k=${process.env.TASTEDIVE_TOKEN}&info=1`
//     }))(request, response);
// }

app.get('/results', (request, response) => {
    superAgent
        .get(`https://tastedive.com/api/similar?q=book:call+of+the+wild&k=${process.env.TASTEDIVE_TOKEN}&info=1`)
        .end((err, res) => response.send(res.text));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));


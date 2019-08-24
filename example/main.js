const express = require('express');

const app = express();

const IndexRoute = require('./routes/IndexRoute');
const indexRoute = new IndexRoute(
    {
        timePassedBetween: 1000, // 1000ms
        maxPerMinute: 3 // max amount of requests per minute
    });

app.get('/', (req, res, next) =>
{
    indexRoute.preHandle(req, res, next);
});

app.listen(3000);
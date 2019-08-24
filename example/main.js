const express = require('express');

const app = express();

const IndexRoute = require('./routes/IndexRoute');
const indexRoute = new IndexRoute(
    {
        timePassedBetween: 1000, // 1000ms, the min time passed between two requests. DEFAULT: 50ms
        maxPerMinute: 3 // max amount of requests per minute. DEFAULT: Number.MAX_SAFE_INTEGER
    });

app.get('/', (req, res, next) =>
{
    indexRoute.preHandle(req, res, next);
});

app.listen(3000);
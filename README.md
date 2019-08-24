# express-ratelimiter

## This project is not affiliated with "express" (Not official)
## Work In Progress, you shouldn't confidently use this in production. (It does work though)

## How to use (simple example):

```javascript
const express = require('express');

const app = express();

const IndexRoute = require('./routes/IndexRoute');
const indexRoute = new IndexRoute(
    {
        timePassedBetween: 1000, // 1000ms, the min time passed between two requests
        maxPerMinute: 3 // max amount of requests per minute
    });

app.get('/', (req, res, next) =>
{
    indexRoute.preHandle(req, res, next);
});

app.listen(3000);
```
IndexRoute.js:
```javascript 
const { ExpressRoute } = require('express.js-ratelimiter');

class IndexRoute extends ExpressRoute
{
    handle(req, res, next)
    {
        res.send('Hello World');
    }
}

module.exports = IndexRoute;
```
### To change the responses to blocked requests override the ExpressRoute.requestBlocked method. Current form:
```javascript
requestBlocked(res)
{
    res.status(429).json(
        {
            statusCode: 429,
            errorCode: 'TO_MANY_REQUESTS',
            error: 'You have been rate-limited. Calm down and try again later.'
        });
}
```
// const { ExpressRoute } = require('express.js-ratelimiter'); // you need to use this code
const { ExpressRoute } = require('../../');

class IndexRoute extends ExpressRoute
{
    handle(req, res, next)
    {
        res.send('Hello World');
    }
}

module.exports = IndexRoute;
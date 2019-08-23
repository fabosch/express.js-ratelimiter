// const { ExpressRoute } = require('express-ratelimiter'); // you need to use this code
const { ExpressRoute } = require('../../');

class IndexRoute extends ExpressRoute
{
    handle(req, res)
    {
        res.send('Hello World');
    }
}

module.exports = IndexRoute;
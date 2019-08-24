const LimitStorage = require('./LimitStorage');

class ExpressRoute
{
    constructor(pOptions = {})
    {
        this.limitStorage = new LimitStorage(pOptions.timePassedBetween, pOptions.maxPerMinute);
    }

    preHandle(req, res, ...args)
    {
        if(this.limitStorage.verifyAndAdd(req.connection.remoteAddress))
        {
            this.handle(req, res, ...args);
        } else
        {
            this.requestBlocked(res);
        }
    }

    handle(req, res, next)
    {
        
    }

    requestBlocked(res)
    {
        res.status(429).json(
            {
                statusCode: 429,
                errorCode: 'TO_MANY_REQUESTS',
                error: 'You have been rate-limited. Calm down and try again later.'
            });
    }
}

module.exports = ExpressRoute;
const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    console.log('in midle');
    if (err instanceof ApiError) {
        console.log('in instance');
        return res.status(err.status).json({ message: err.message, errors: err.errors })
    }

    return res.status(500).json({message: 'Unknown error'})
}
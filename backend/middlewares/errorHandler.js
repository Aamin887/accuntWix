const errorHandler = function (err, req, res, next) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(parseInt(statusCode)).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : ''
    });
};

module.exports = errorHandler;
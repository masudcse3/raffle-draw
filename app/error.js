const notFoundHandler = (_req, _res, next) => {
    const error = new Error(`404 Resource not found`);
    error.status = 404;
    next(error)
}

const errorHandler = (error, req, res, next) =>{
    if(error.status){
        return res.status(error.status).json({message: error.message})
    }
    return res.status(500).json({message: 'Something went wrong on the server'})
}
module.exports = {notFoundHandler, errorHandler};



require('dotenv').config('../.env');
const express = require('express');
const  {notFoundHandler, errorHandler} = require('./error');
const app = express();

 // middlewares
app.use(require('./middleware'));
// routes
app.use(require('./routes'))
 // not found handleer
app.use(notFoundHandler);

//error handler
app.use(errorHandler);


module.exports = app;
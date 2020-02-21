'use strict';

const express = require('express');
const app = express();

const morgan = require('morgan');

// Logs
app.use(morgan('combined'));


// Constants
const PORT = process.env.PORT || 3200;
const HOST = process.env.HOST || '0.0.0.0';



app.get('/', async (req,res,next) => {
    res
        .status(200)
        .json({
            message: "Hello World !",
            httpStatus: res.statusCode,
        })
});


app.listen(PORT, function () {
    console.log(`Running on http://${HOST}:${PORT}`)
});

// The Database is MongoDB

// you are free to choose your own structure for the contollers and routes.
// Ideally, what you need are the following:
// 1. Controllers
// 2. Routes
// 3. Models - Already provided

// As for the routes, you will need:
// 1. A route to get teh vendor
// 2. A route to get all the customers
// 3. A route to create orders
// 4. A route to get all the orders
// 5. A route to send out emails


// Additional Info:
// For the distance calculation, you can do it on the client side or the server side, the choice is yours.
// You have the creative freedom to choose your own email service that you can use to send out emails. (Just dont complicate it too much, you have a time constraint)


// import express
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const apiRouter = require('./routes/router.api');
const cors = require('cors');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 5010;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
//Add our api router
app.use('/api', apiRouter);


const startApp = () => {
    mongoose.connect(process.env.MONGOURI)
        .then(() => {
            //Only start our app when we are able to connect to database
            app.listen(port, () => {
                console.log(`api running on port ${port}`);
            });
        }).catch((e) => {
            console.error('Server could not start');
            console.error(e);
        });
}

startApp();




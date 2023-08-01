const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');
require('dotenv').config();



app.use(cors());
app.use(express.json());



// import routes
const usersRoute = require('./v1/Routes/users.route');
const partsRoute = require('./v1/Routes/parts.route');
const ordersRoute = require('./v1/Routes/orders.route');
const servicesRoute = require('./v1/Routes/services.route');
const stafsRoute = require('./v1/Routes/stafs.route');





// declare routes
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/parts', partsRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/services', servicesRoute);
app.use('/api/v1/stafs', stafsRoute);



app.get("/", (req, res) => {
    try {
        res.send("Welcome to Auto Parts Service Server !");
    } catch (error) {
        console.log(error.message);
    };
});

app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});


app.listen(PORT, () => {
    try {
        console.log(`server is successfully running on port ${PORT}!`.red.bold);
    } catch (error) {
        console.log(error.message);
    };
});

exports = app;
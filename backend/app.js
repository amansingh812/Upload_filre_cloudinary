const express = require('express');
const app = express();
const studentRoute = require('./api/route/student');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');




mongoose.connect('mongodb+srv://AmanSingh:PNqhlcL38BDrFSYC@cluster0.iruwkqn.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error', err => {
    console.log('connection fail')
})

mongoose.connection.on('connected', connected => {
    console.log('connected with database...');
})

app.use(fileUpload({
    useTempFiles: true
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/student', studentRoute);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'app is running'
    })
})

module.exports = app;
const express = require('express');
const app = express();
const port = '8000';
const home = require('./route/home');
const bodyParser = require('body-parser');
const submitForm = require('./route/form');
const mongoose = require('mongoose');
// db connet
mongoose.connect('mongodb://localhost/myapp');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('./vendors'));// to make css js images all work !important 
app.use(express.static('./build')); // to make css js images all work !important
app.use(express.static('./production')); // to make css js images all work !important

app.use('/', home);
app.use('/', submitForm);

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }
    console.log('server is up at '+ port);
});
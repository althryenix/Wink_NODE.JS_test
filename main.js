const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

//Import routes
const router = require('./Routes/PostRoute');
app.use('/posts', router);

//Connect to MongoDB //--ENTER CONNECTION URI TO .env FILE
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser : true}, () => {console.log('Connected')});

//Start listening to the server from 3000 port
app.listen(3000);
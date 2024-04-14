require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const { message } = require('statuses');

//connecting to database
connectDb();

app.get('/AWS', (req, res) => {
    res.status(200).json({message: 'HELLO AWSCC'});
})

app.listen(8080, () => {
    console.log('Server is running in port 8080');
})
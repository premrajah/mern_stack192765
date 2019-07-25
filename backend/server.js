const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());              // use cors middle ware
app.use(express.json());      // instead of body parser now included in express

const uri = process.env.ATLAS_URI;   // URI from Mongodb atlas
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); // 


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully.');
});



app.listen(port, () => {
    console.log('Server running on port ', port);
});


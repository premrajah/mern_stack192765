const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());                // use cors middle ware
app.use(express().json());      // instead of bod parser 




app.listen(port, () => {
    console.log('Server running on port ', port);
});


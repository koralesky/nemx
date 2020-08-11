const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, () => console.log('DB Connected'));

//App setup
app.listen(3000);
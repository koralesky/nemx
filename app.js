const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const postRoutes = require('./routers/posts');

//MiddleWares
app.use('/posts', postRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => console.log('DB Connected'));

//App setup
app.listen(3000);
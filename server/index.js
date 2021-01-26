require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 7021 ;
const posts = require('./routes/posts');
const login = require('./auth/login')
const URL = process.env.database_url ;
const register = require('./auth/register')
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/user', posts);
app.use('/login', login);
app.use('/register', register)




mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log("Mongo connected !")
});



app.listen(PORT)
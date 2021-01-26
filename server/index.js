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
const cookieParser = require('cookie-parser');
const logout = require('./auth/logout');


app.use(cors());
app.use(express.json());
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use(cookieParser())
app.use('/user', posts)




mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log("Mongo connected !")
});



app.listen(PORT)
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
const jwt = require('jsonwebtoken')

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use(cookieParser())
app.use('/', posts)
app.use((req, res, next) => {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
})



mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log("Mongo connected !")
});



app.listen(PORT)
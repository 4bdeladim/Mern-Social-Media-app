require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

const signToken = userID => {
    return jwt.sign({
        iss: process.env.JWT_KEY,
        sub: userID
    }, process.env.JWT_KEY, {expiresIn: "1h"})
}



router.post('/', (req, res) => {
    const { username, password } = req.body ;
    const userlogin =  User.findOne({username}, (err, user) => {
        if(err) res.status(404).json({ message: 'Somthing went wrong ! '})
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(err) {
                    res.status(401)
                    res.json({ message: "Somthing went wrong"})
                }
                if(response) {
                    res.status(200).json(user.todo)
                }
                else {
                   res.json({success: false, message: 'passwords do not match'});
                }                
            })
        }
        if(!user) res.status(401).json({message: 'Invalid informations ! '})
    }); 
    
})


module.exports = router
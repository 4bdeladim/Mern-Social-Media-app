require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_KEY
const jwtCookie = process.env.COOKIE_NAME




router.post('/', (req, res) => {
         
    const { username, password } = req.body ;

    if(!username || !password) {
        return res.status(400).json({ msg: 'Please enter all field'})
    }

    User.findOne({ username })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist'})

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msgg: 'invalid cre'})

                    jwt.sign(
                        { id: user.id },
                        jwtKey,
                        (err, token) => {
                            res.cookie(jwtCookie, token).json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    username: user.username
                                }
                            })


                        }
                    )
                })
    })
});



module.exports = router
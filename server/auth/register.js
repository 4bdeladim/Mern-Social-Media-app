const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/', async (req, res) => {
    const { username, password } = req.body ;
    const salt = bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const userCheck = User.findOne({username}, (err, user) => {
            if(user) res.status(409).json({ message: "This user is taken "})
            if(!user) {
                const newUser = new User({
                    username: username,
                    password: hashedPassword
                })
                newUser.save()
                res.status(200).json({message: "Account has been created "})
            }
        })
    } catch (error) {
        res.status(404).json({message: 'Somthing went wrong !'})
    }
    
});


module.exports = router
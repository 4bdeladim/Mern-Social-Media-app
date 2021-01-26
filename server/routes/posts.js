require('dotenv').config()
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../auth/middleware/auth');
const getCookie = require('../auth/middleware/cookies');
const jwt = require('jsonwebtoken')




const getId = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id 
    return id
}

//----------------------------->>

//GET USER POSTS <:3
router.get('/posts', auth, async (req, res) => {
    const id = getId(getCookie(req.headers.cookie))
    const { posts } = await User.findById(id)
    res.status(200).json(posts)
});


//POST A NEW POST :-:
router.post('/posts',  async (req, res) => {
    const { descreption } = req.body 
    const id = getId(getCookie(req.headers.cookie))
    const user = await User.findById(id)
    const newPost = await User.findByIdAndUpdate(id, {new: true},  { posts: { descreption: descreption}}, (err, model) => {
        if(err){ 
            res.status(400).json({message: 'Somthing went wrong'})
        } 
        else{ 
            res.status(200).json(model)
        } 
    })
    newPost.save()
    res.json(user)
   
})




module.exports = router 
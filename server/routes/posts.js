require('dotenv').config()
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../auth/middleware/auth');
const getCookie = require('../auth/middleware/cookies');
const jwt = require('jsonwebtoken')
const uuid = require('uuid')



const getId = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id 
    return id
}

//----------------------------->>

//GET USER POSTS <:3
router.get('/user/posts', auth,  async (req, res) => {
    const id = getId(getCookie(req.headers.cookie))
    const { posts } = await User.findById(id)
    res.status(200).json(posts)
});


//POST A NEW POST :-:
router.post('/user/posts', auth,  async (req, res) => {
    const { descreption } = await req.body 
    if(!descreption || descreption.length === 0) res.json({message: 'Descreption cannot be empty'})
    else {
        const id = getId(getCookie(req.headers.cookie))
        const user = await User.findById(id)
        const newPost = {
            id: uuid.v4() ,
            descreption: descreption,
            username: user.username
        }
        user.posts.push(newPost)
        user.save()
        res.json(user) 
    }   
})


//DELETE a post -_- 
router.delete('user/posts', auth, async (req, res) => {
    const { ID } = req.body 
    const id = getId(getCookie(req.headers.cookie))
    const user = await User.findById(id);
    const posts = user.posts
    posts.splice(posts.findIndex(i => i.id === ID), 1)
    user.save()
    res.json({message: 'post deleted'})
})


//GET all posts 
router.get('/posts', async (req, res) => {
    const users = await User.find()
    const posts = users.map(user => {
        return user.posts
    })
    res.json(posts)
})



module.exports = router 
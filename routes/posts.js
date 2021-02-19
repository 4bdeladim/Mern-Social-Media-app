require('dotenv').config()
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../auth/middleware/auth');
const jwt = require('jsonwebtoken')
const uuid = require('uuid');
const { route } = require('../auth/login');



const getId = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id 
    return id
}

//----------------------------->>

//GET USER POSTS <:3
router.get('/user/posts', auth,  async (req, res) => {
    const token = req.headers.cookie.split('=')[1]
    const id = getId(token)
    const { posts } = await User.findById(id)
    res.status(200).json(posts)
});


//POST A NEW POST :-:
router.post('/user/posts', auth,  async (req, res) => {
    const { descreption, title } = await req.body 
    if(!descreption || descreption.length === 0 || !title || title.length < 2) res.json({message: 'Descreption and title cannot be empty'})
    else {
        try {
            const id = getId(req.headers.cookie.split('=')[1])
            const user = await User.findById(id)
            const newPost = {
                poster: user.id,
                descreption: descreption,
                title: title,
                username: user.username,
                name: user.name,
                date: Date.now(),
                likes: [],
                comments: [],
            }
            user.posts.push(newPost)
            user.save() 
            res.json({posts: user.posts}) 
        } catch (error) {
            res.status(404)
        }
        
    }   
})


//DELETE a post -_- 
router.delete('/user/posts', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1]
    const { ID } = req.body 
    const id = getId(token)
    const user = await User.findById(id);
    const posts = user.posts
    posts.splice(posts.findIndex(i => i.id === ID), 1)
    user.save()
    const newPosts = await user.posts
    res.json({message: 'post deleted', posts: newPosts})
})


//get a post by id 
router.get('/posts/:id', async (req, res) => {
    const users = await User.find()
    const posts = users.map(user => {
        return user.posts
    })
    const post = posts.filter(post => post.id !== req.params.id)
    res.json(post[0])
})


//like a post :<3
router.put('/users/:user_id/posts/:id/likes', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1]
    const id = getId(token)
    const user = await User.findById(req.params.user_id)
    const posts = await user.posts
    const post = await posts.filter((post) => post.id === req.params.id)
    post[0].likes.push(id)
    await user.save()
    res.json(post)
})


//unlike a post 
router.delete('/users/:user_id/posts/:id/likes', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1];
    const unliker = getId(token);
    const user = await User.findById(req.params.user_id);
    const posts = await user.posts;
    const post = await posts.filter((post) => post.id === req.params.id);
    const index = post[0].likes.indexOf(unliker);
    if (index > -1) {
        post[0].likes.splice(index, 1);
    }
    await user.save()
    res.json(post)
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
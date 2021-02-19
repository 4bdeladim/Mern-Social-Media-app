require('dotenv').config()
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const auth = require('../../auth/middleware/auth');
const jwt = require('jsonwebtoken')
const uuid = require('uuid');
const { route } = require('../../auth/login');



const getId = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const id = decoded.id 
    return id
}

//----------------------------->>


//like a post :<3
router.put('/users/:user_id/posts/:id/likes', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1];
    const id = await getId(token);
    const liker = await User.findById(id)
    const user = await User.findById(req.params.user_id);
    const posts = await user.posts;
    const post = await posts.filter((post) => post.id === req.params.id);
    post[0].likes.push(id);
    post[0].likes = [...new Set(post[0].likes)];
    liker.likedPosts.push({
        post: req.params.id,
        poster: req.params.user_id
    })
    const seen = new Set();
    const filteredArr = liker.likedPosts.filter(el => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
    });
    liker.likedPosts = filteredArr
    await user.save()
    await liker.save()
    res.json(liker)
})


//unlike a post 
router.delete('/users/:user_id/posts/:id/likes', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1];
    const unlikerID = getId(token);
    const unliker = await User.findById(unlikerID);
    const index2 =  unliker.likedPosts.findIndex(x => x.post === req.params.id);
    const user = await User.findById(req.params.user_id);
    const posts = await user.posts;
    const post = await posts.filter((post) => post.id === req.params.id);
    const index = post[0].likes.indexOf(unliker);
    if (index > -1) {
        post[0].likes.splice(index, 1);
    }
    if (index2 > -1) {
        unliker.likedPosts.splice(index2, 1);
    }
    await unliker.save()
    await user.save()
    res.json(unliker)
})

//get people who like a post :<3
router.get('/users/:user_id/posts/:id/likes', auth, async (req, res) => {
    
    res.json()
})



module.exports = router 
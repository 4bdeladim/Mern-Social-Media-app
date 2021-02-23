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
router.put('/posts/:id/likes', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1];
    const id = await getId(token);
    const liker = await User.findById(id)
    const users = await User.find()
    const posts = users.map(user => {
        return user.posts
    })
    const newposts = []
    for(i = 0 ; i < posts.length ; i++) {
        for(j=0; j<posts[i].length; j++) {
            newposts.push(posts[i][j])
        }
    }
    const post =  newposts.filter(post => {
        return post.id === req.params.id
    })
    const user = await User.findById(post[0].poster);
    post[0].likes.push(liker.username);
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
    res.json(post)
})


//unlike a post 
router.delete('/posts/:id/likes', auth, async (req, res) => {
    
    const token = req.headers.cookie.split('=')[1];
    const unlikerID = getId(token);
    const unliker = await User.findById(unlikerID);
    const index2 =  unliker.likedPosts.findIndex(x => x.post === req.params.id);
    const users = await User.find()
    const posts = users.map(user => {
        return user.posts
    })
    const newposts = []
    for(i = 0 ; i < posts.length ; i++) {
        for(j=0; j<posts[i].length; j++) {
            newposts.push(posts[i][j])
        }
    }
    const post =  newposts.filter(post => {
        return post.id === req.params.id
    })
    const user = await User.findById(post[0].poster);
    const index = post[0].likes.indexOf(unliker.username);
    if (index > -1) {
        post[0].likes.splice(index, 1);
    }
    if (index2 > -1) {
        unliker.likedPosts.splice(index2, 1);
    }
    await unliker.save()
    await user.save()
    res.json(post)
})

//get people who like a post :<3
router.get('/posts/:id/likes', auth, async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const posts = await user.posts;
    const post = await posts.filter((post) => post.id === req.params.id);
    res.json(post[0].likes)
})

//comment a post 
router.put('/posts/:id/comments', auth, async (req, res) => {
    const token = req.headers.cookie.split('=')[1];
    const { comment } = req.body
    if(!comment || comment.length < 1) res.json({message: `comment can't be less than 1 letter ${comment}`})
    else {
        const id = await getId(token);
        const commenter = await User.findById(id)
        const users = await User.find()
        const posts = users.map(user => {
            return user.posts
        })
        const newposts = []
        for(i = 0 ; i < posts.length ; i++) {
            for(j=0; j<posts[i].length; j++) {
                newposts.push(posts[i][j])
            }
        }
        const post = newposts.filter(post => {
            return post.id === req.params.id
        })
        const user = await User.findById(post[0].poster)
        const newPost = await user.posts.filter(post => {
            return post.id === req.params.id
        })
        await newPost[0].comments.push({
            user: commenter.username,
            descreption: comment
        })
        await user.save()
        res.json(newPost[0])
    }
})

//get comments on post 
router.get('posts/:id/comments', auth, async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const posts = await user.posts;
    const post = await posts.filter((post) => post.id === req.params.id);
    res.json(post[0].comments)
})

module.exports = router 
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import { comment } from '../actions/reactions';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import '../styles/posts.css'
const Posts = () => {
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts.post)
    useEffect(() => {
        dispatch(getPosts());
    }, [])


    const posts = useSelector(state => state.posts.posts);
    let newPosts = [] ;
    for (let i = 0; i < posts.length; i++) {
        for (let z = 0; z < posts[i].length; z++ ) {
            newPosts.push(posts[i][z])
        }
    }

    return (
        <>  
            <Navbar Next={auth ? 'Profile' : 'Login'} path={auth ? 'profile' : '/'} /> 
            <div className="posts-container">
                <div className="title">
                    <h1>Posts</h1>
                </div>
                <div className="posts">
                    {
                        newPosts.map((post, index) => (
                            <Post path={`/feed/${post._id}`} poster={post.poster} postid={post._id} likes={post.likes.length} btn={'like-btn'} btnID={post._id} name={post.name} title={post.title} username={post.username} description={post.descreption}  key={post._id} /> 
                        ))
                    }
                </div>
            </div>
        </>
        
    )
}

export default Posts

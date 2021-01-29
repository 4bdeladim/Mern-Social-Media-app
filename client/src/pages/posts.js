import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import '../styles/posts.css'
const Posts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts());
    }, [])


    const posts = useSelector(state => state.posts);
    let newPosts = [] ;
    for (let i = 0; i < posts.length; i++) {
        for (let z = 0; z < posts[i].length; z++ ) {
            newPosts.push(posts[i][z])
        }
    }
    return (
        <>  
            <Navbar Next={'Login'} path={"/"} /> 
            
            <div className="posts-container">
                <div className="title">
                    <h1 className="display-1">Posts</h1>
                </div>
                <div className="posts">
                    {
                        newPosts.map((post) => (
                            <Post username={post.username} description={post.descreption}  key={post.id} /> 
                        ))
                    }
                </div>
            </div>
        </>
        
    )
}

export default Posts

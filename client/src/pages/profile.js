import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'
import { getMyPostsforAccess } from '../actions/posts'
import ModalComponent from '../components/Modal'
import Post from '../components/Post'
import '../styles/profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyPostsforAccess())
    })
    const username = useSelector(state => state.posts.username)
    const posts = useSelector(state => state.posts.myposts)
    const post = useSelector(state => state.posts.post)
    const logoutfromtheaccount =  async () => {
        dispatch(logout());
    }
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to='/feed' className="navbar-brand">Feed</Link>
            <Link to="/logout" >
            <button
                onClick={logoutfromtheaccount}
            className="btn btn-outline-danger " type="submit">Logout</button>
            </Link>
            </div>
            </nav>
            <div className="posts-container">
                <div className="title-field">
                    <ModalComponent />  
                    <h1>My posts</h1>
                </div>
                <div className="posts">
                    {
                        posts.map((post, index) => (
                            <Post
                            licked={
                                post.likes.indexOf(username) !== -1 ? (
                                    true   
                                ) : (
                                    false
                                )
                            } 
                            path={`/profile/posts/${post._id}`} postid={post._id} likes={post.likes.length} btnID={post._id} btn="delete" name='You' username={post.username} title={post.title} description={post.descreption}  key={post._id} /> 
                        ))
                    }
                </div>
            </div>
        </>
        
    )
}

export default Profile

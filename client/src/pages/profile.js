import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'
import { getMyPostsforAccess } from '../actions/posts'
import Navbar from '../components/Navbar'
import Post from '../components/Post'


const Profile = () => {
    const dispatch = useDispatch()
    const [path, setPath] = useState('')
    useEffect(() => {
        dispatch(getMyPostsforAccess())
    })
    const posts = useSelector(state => state.posts.myposts)
    const logoutfromtheaccount =  async () => {
        dispatch(logout());
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Gitub repo</a>
            <Link to="/logout" >
            <button
                onClick={logoutfromtheaccount}
            className="btn btn-outline-danger " type="submit">Logout</button>
            </Link>
            </div>
            </nav>
            <div className="posts-container">
                <div className="title">
                    <h1 className="display-2">My posts</h1>
                </div>
                <div className="posts">
                    {
                        posts.map((post) => (
                            <Post btnID={post.id} btn="delete" name='You' username={post.username} description={post.descreption}  key={post.id} /> 
                        ))
                    }
                </div>
            </div>
        </>
        
    )
}

export default Profile

import React, { useEffect, useState } from 'react'
import '../styles/singlepost.css'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getonepost } from '../actions/posts';
const Singlepost = () => {
    const location = useLocation();
    const post = useSelector(state => state.posts.post);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getonepost(location.pathname.split('/')[2]))
    }, [])
    

    
    return (
        <>
        {
            post.length < 1 ? (
                <h1>loading</h1>
            ) : (
                <div className="single-post-container">
                    <div className="card-header">
                        {post.username}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{post.descreption}</h5>
                        <p className="card-text">{post.date}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                            
                            <h3 className="numbers-likes">
                            
                            </h3>
                        </div>
                    </div>
                    {
                        post.comments.map((comment, index) => (
                            
                                comment.descreption ? (
                                    <table key={index} className="table table-dark table-striped">
                                        <tbody>
                                            <tr className="username">
                                                <th>{comment.user}</th>
                                            </tr>
                                            <tr className="comment">
                                                <th>{comment.descreption}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    ''
                                )
                            
                        )) 
                    }
                </div>
            )
        }
        </>
    )
}

export default Singlepost

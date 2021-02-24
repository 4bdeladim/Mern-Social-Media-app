import React, { useEffect, useState } from 'react'
import '../styles/singlepost.css'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getonepost } from '../actions/posts';
import { comment, like, unlike } from '../actions/reactions';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom'
const Singlepost = () => {
    const location = useLocation();
    const post = useSelector(state => state.posts.post);
    const [Xcomment, XsetComment] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getonepost(location.pathname.split('/').reverse()[0]))
    }, [])
    const username = useSelector(state => state.posts.username)

    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to='/feed' className="navbar-brand">Feed</Link>
            </div>
        </nav>
            
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
                        <p className="card-text">{post.date.split('T')[0]}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                        <h3 className="numbers-likes">
                            {
                                post.likes.length === 1 ? (
                                    post.likes.length + ' Like'
                                ) : (
                                    post.likes.length + ' Likes'
                                )
                            }
                        </h3>
                        <div className="mr-3">
                            {
                                post.likes.indexOf(username) !== -1 ? (
                                    <AiFillDislike
                                    onClick={() => dispatch(unlike(post._id))}
                                    className="like-btn" />
                                ) : (
                                    <AiFillLike
                                    onClick={() => dispatch(like(post._id))}
                                    className="like-btn " />
                                )
                            }
                        </div>
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
        {
            post.length < 1 ? (
            ''
            ) : (
                <div className="input-group mb-3 mt-3 comment-grp">
                    <button className="btn btn-outline-danger" type="button"
                        onClick={() => dispatch(comment(post._id, Xcomment))}
                    >Comment</button>
                    <input 
                        onChange={(e) => XsetComment(e.target.value)}
                    
                    type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            )
        }
        </>
    )
}

export default Singlepost

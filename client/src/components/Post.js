import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteapost } from '../actions/posts';
import '../styles/post.css'
import ErrorModal from './ErrorModal'
import { AiFillDislike, AiFillLike, AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'
import { comment, like, unlike } from '../actions/reactions';
import { Link } from 'react-router-dom'




const Post = ({username, description, title, btn, path, likes, licked, postid}) => {
    const dispatch = useDispatch()
    const [Xcomment, Xsetcomment] = useState('')
    

    
    
    return (
        <div 
            className="card m-3" style={{width: "300px"}}>
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a
                    onClick={(e) => dispatch(deleteapost())}
                href="#" className="btn btn-primary mr-4" id={btn}>{btn}</a>
               <Link to={path}>
                    <button href="#" className="btn btn-primary ">view post</button>
               </Link>
            </div>
            <div className="card-footer">
                <div className="row justify-content-between align-items-center">
                    <h3 className="numbers-likes">
                        {
                            likes === 1 ? (
                                likes + ' Like'
                            ) : (
                                likes + ' Likes'
                            )
                        }
                    </h3>
                    <div className="mr-3">
                        {
                            licked ? (
                                <AiFillDislike 
                                onClick={() => dispatch(unlike(postid))}
                                className="like-btn" />
                            ) : (
                                <AiFillLike 
                                    onClick={() => dispatch(like(postid))}
                                    className="like-btn "
                                />
                            )
                        }
                    </div>
                </div>
                <div className="input-group mb-3 mt-3">
                <button
                onClick={(e) => dispatch(comment(e.target.id, Xcomment))} className="btn btn-outline-danger" type="button" id={postid} >Comment</button>
                <input
                    onChange={(e) => Xsetcomment(e.target.value)}
                type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>
        </div>
    )
}

export default Post

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteapost } from '../actions/posts';
import '../styles/post.css'
import ErrorModal from './ErrorModal'
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'
import { comment } from '../actions/reactions';
import { Link } from 'react-router-dom'




const Post = ({username, description, title, btn, path, likes, licked, poster, postid, commentfun, btnID }) => {
    const dispatch = useDispatch()
    let commenT = useSelector(state => state.posts.comment)
    
    
    const post_the_comment = (e) => {
        commentfun(e.target.value, e.target.id, commenT)
        commenT = ''
    }

    
    
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
               <Link to={path}  onClick={() => console.log(path)}>
                    <button href="#" className="btn btn-primary ">view post</button>
               </Link>
            </div>
            <div className="card-footer">
                <div className="row justify-content-between align-items-center">
                    {
                        licked ? (
                            <AiTwotoneDislike className="likeIcon" />
                        ) : (
                            <AiTwotoneLike className="likeIcon" />
                        )
                    }
                    <h3 className="numbers-likes">
                        {
                            likes === 1 ? (
                                likes + ' Like'
                            ) : (
                                likes + ' Likes'
                            )
                        }
                    </h3>
                </div>
                <div className="input-group mb-3 mt-3">
                <button
                onClick={(e) => dispatch(comment(e.target.value, e.target.id, 'Hello'))}
                value={poster}
                className="btn btn-outline-danger" type="button" id={postid} >Comment</button>
                <input
                    onChange={(e) => commenT = e.target.value}
                type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>
        </div>
    )
}

export default Post

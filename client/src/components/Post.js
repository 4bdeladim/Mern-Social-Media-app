import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteapost } from '../actions/posts';
import '../styles/post.css'


const Post = ({username, description, title, btn, btnID}) => {
    const [id, setid] = useState('');
    const dispatch = useDispatch()
    return (
        <div 
            onClick={(e) => setid(btnID)}
            className="card m-3" style={{width: "300px"}}>
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a
                    onClick={(e) => dispatch(deleteapost())}
                href="#" className="btn btn-primary" id={btn}>{btn}</a>
            </div>
        </div>
    )
}

export default Post

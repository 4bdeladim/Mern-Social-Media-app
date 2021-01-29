import React from 'react'

const Post = ({username, description}) => {
    return (
        <div className="card m-3" style={{width: "300px"}}>
            <div className="card-header">
                {username}
            </div>
            <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Like</a>
            </div>
        </div>
    )
}

export default Post

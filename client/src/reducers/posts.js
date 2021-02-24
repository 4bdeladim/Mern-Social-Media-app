

let initialState = {
    posts: [],
    myposts: [],
    message: '',
    username: '',
    comment: '',
    commentMessage: '',
    post: []
}
export default (posts = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            posts.posts = action.payload
            return posts ;
        case 'FETCH_MY_POSTS_SUCCESS':
            posts.myposts = action.payload.posts
            posts.username = action.payload.username
            return posts ;
        case 'POST_DELETED':
            posts.myposts = action.payload.posts
            return posts
        case 'POST_ADDED':
            posts.myposts = action.payload.posts
            posts.message = action.payload.message
            return posts
        case 'POST_NOT_ADDED':
            posts.message = action.payload
            return posts
        case 'COMMENT_SUCCESS':
            posts.post = action.payload
            return posts
        case 'COMMENT_ERROR':
            posts.commentMessage = action.payload
            return posts
        case 'LIKE_SUCCESS':
            if(posts.post._id === action.payload._id) {
                posts.post = action.payload
            }
            return posts
        case 'LIKE_ERROR':
            return posts
        case 'UNLIKE_SUCCESS':
            if(posts.post._id === action.payload._id) {
                posts.post = action.payload
            }
            return posts
        case 'UNLIKE_ERROR':
            return posts
        case 'GET_POST_SUCCESS':
            posts.post = action.payload[0]
            return posts
        case 'GET_POST_ERROR':
            return posts
        default:
            return posts ;
    }
} 
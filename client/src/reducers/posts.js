let initialState = {
    posts: [],
    myposts: [],
    message: ''
}
export default (posts = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            posts.posts = action.payload
            return posts ;
        case 'FETCH_MY_POSTS_SUCCESS':
            posts.myposts = action.payload
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
        default:
            return posts ;
    }
}
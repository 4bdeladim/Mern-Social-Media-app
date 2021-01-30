let initialState = {
    posts: [],
    myposts: []
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
            
            console.log(action.payload)
            return action.payload
        default:
            return posts ;
    }
}
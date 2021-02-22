import * as api from '../api'


//Action Creators,

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const getMyPostsforAccess = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMyPosts();
        dispatch({type: 'LOGIN_SUCCESS', payload: null})
        dispatch({type: 'FETCH_MY_POSTS_SUCCESS', payload: data})
    } catch (error) {   
        dispatch({ type: 'FETCHING_USER_POSTS_ERROR' })
    }
}

export const deleteapost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id)
        dispatch({type: 'POST_DELETED', payload: data});
    } catch(err) {
        console.log(err)
    }
}

export const addApost = (title, descreption) => async (dispatch) => {
    try {
        const { data } = await api.addPost(title, descreption);
        dispatch({type: 'POST_ADDED', payload: data})
    } catch (error) {
        dispatch({type: 'POST_NOT_ADDED', payload: 'Somthing went wrong'})
    }
}
export const getonepost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getpostbyid(id)
        dispatch({type: 'GET_POST_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'GET_POST_ERROR', payload: 'Somthing went wrong'})
    }
}
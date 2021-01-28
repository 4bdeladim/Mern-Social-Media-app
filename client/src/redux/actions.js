import { ADD_POST, DELETE_POST, GET_POSTS, LOGIN } from "./types";


export function addPost(post) {
    return {
        type: ADD_POST,
        payload: post
    }
}

export function deletePost(postID) {
    return {
        type: DELETE_POST,
        payload: postID
    }
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: null
    }
}

export function login(credentials) {
    return {
        type: LOGIN,
        payload: credentials
    }
}
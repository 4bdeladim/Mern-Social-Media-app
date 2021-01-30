import axios from 'axios' 


axios.defaults.withCredentials = true
const url = 'http://localhost:7021/' ;


export const fetchPosts = () => axios.get(`${url}posts`);
export const login = (username, password) => axios.post(`${url}login`, {username: username, password: password});
export const fetchMyPosts = () => axios.get(`${url}user/posts`);
export const register = (name, username, password) => axios.post(`${url}register`, {name: name, username: username, password: password});
export const logout = () => axios.post(`${url}logout`)
export const deletePost = (id) => axios.delete(`${url}user/posts`, {ID: id})
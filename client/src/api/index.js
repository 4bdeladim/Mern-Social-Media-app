import axios from 'axios' 

const url = 'http://localhost:7021/posts' ;


export const fetchPosts = () => axios.get(url);
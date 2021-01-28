import { data } from "./states";
import { ADD_POST, DELETE_POST, GET_POSTS, LOGIN } from "./types";
import axios from 'axios'

export let reducer = (state = data , action) => {
    axios.defaults.withCredentials = true
    switch (action.type) {
        case GET_POSTS:
            if(state[2].auth) {
                axios.get('http://localhost:7021/posts')
                .then((res) => state[0].push(res.data))
                .catch((err) => err)
            }
        break ;
        case ADD_POST:
            if(state[2].auth && action.payload !== '') {
                axios.post('http://localhost:7021/user/posts', {
                    descreption: action.payload
                }).then((res) => console.log(res))
            }
        break ;
        case LOGIN: 
            if(!state[2].auth) {
                axios.post('http://localhost:7021/login', {
                    username: action.payload.username,
                    password: action.payload.password
                }).then((res) => {
                    state[2].auth = true
                }).catch(() => state[3] = 'Invalid credentials')
                console.log(action.payload)
            }
        break ;
    }
    return state
}
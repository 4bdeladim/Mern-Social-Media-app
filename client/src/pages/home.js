import axios from 'axios'
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Login from './login'
import Register from './register'
const Home = () => {
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState('')

    const loginAccount = (username, password) => {
        if(!auth) {
            axios.post('http://localhost:7021/login', {
            username: username,
            password: password
            })
            .then(response => setAuth(true))
            .catch((err) => setMessage('Invalid credentiels'))
        }
    }
    
    return (
        <div>
            <Login loginUser={loginAccount} />
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} exact />
        </div>
    )
}

export default Home

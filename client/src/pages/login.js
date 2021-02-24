import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { loginToAccount } from '../actions/auth';
import { getMyPostsforAccess } from '../actions/posts';

const Login = ({message, loginUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authMessage = useSelector(state => state.auth.message);
    const auth = useSelector(state => state.auth.auth)
    
    
    return (
        <>
            <Navbar Next={'Register'} path={'register'} />
            <div className='container my-3 d-flex flex-column align-items-center justify-content-center align-self-center'>
                <div className="form-floating mb-3 ">
                    <label htmlFor="floatingInput">Username</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="user"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-floating">
                    <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="submit">
                    <button 
                        onClick={() => dispatch(loginToAccount(username, password))}
                    type="submit" className='btn btn-primary mt-3'>Login</button>
                </div>
                <h3 className="mt-4 alert-danger">
                    {auth ? '' : authMessage }
                </h3>
            </div>
            
        </>
    )
}

export default Login

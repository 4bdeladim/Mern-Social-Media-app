import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'


const Login = ({message, loginUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
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
                        onClick={loginUser}
                    type="submit" className='btn btn-primary mt-3'>Login</button>
                    <Link to='/posts'>
                        <button
                            onClick={loginUser}
                        type="submit" className='btn btn-danger mt-3 ml-5'>Guest</button>
                    </Link>
                </div>
            </div>
            {message}
        </>
    )
}

export default Login

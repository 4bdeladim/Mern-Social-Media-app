import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import { login } from '../redux/actions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const state = useSelector(state => state[3]);
    const dispatch = useDispatch();

    const checkLoginInfo = async () => {
        await dispatch(login({
            username: username,
            password: password
        }))
        setMessage(state)  
    }

    
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
                    <button type="submit" className='btn btn-primary mt-3'
                        onClick={checkLoginInfo}
                    >Login</button>
                </div>
            </div>
            {state}
        </>
    )
}

export default Login

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {register} from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [idname, setidname] = useState('none-display');
    const dispatch = useDispatch()
    const registerMessage = useSelector(state => state.auth.registerMessage);


    const submitInfo = async () => {
        await dispatch(register(name, username, password));
        setidname('')
    }

    return (
        <>
        <Navbar Next={'Login'} path={'/'} />
        <div className='container my-3 d-flex flex-column align-items-center justify-content-center align-self-center'>
        <div className="form-floating mb-3">
        <label htmlFor="floatingName">Name</label>
        <input
            onChange={(e) => setName(e.target.value)}
        type="text" className="form-control" id="floatingPassword" placeholder="Name" />
        </div>
        <div className="form-floating mb-3 ">
        <label htmlFor="floatingInput">Username</label>
        <input
            onChange={(e) => setUsername(e.target.value)}
        type="email" className="form-control" id="floatingInput" placeholder="user" />
        </div>
        <div className="form-floating">
        <label htmlFor="floatingPassword">Password</label>
        <input
            onChange={(e) => setPassword(e.target.value)}
        type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        </div>
        <div className="submit">
            <button
                onClick={submitInfo}
            type="submit" className='btn btn-primary mt-3'>Register</button>
        </div>
        <div className={registerMessage === 'Account has been created' ? 'alert alert-success mt-4' : 'alert alert-danger mt-4'} id={idname} >
            {registerMessage} { registerMessage === 'Account has been created' ? <Link to="/">Login</Link> : '' }
        </div>
        </div>
        
        </>
    )
}

export default Register

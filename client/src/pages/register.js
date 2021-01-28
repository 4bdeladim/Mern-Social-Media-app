import React from 'react'
import Navbar from '../components/Navbar'

const Register = () => {
    return (
        <>
        <Navbar Next={'Login'} path={'/'} />
        <div className='container my-3 d-flex flex-column align-items-center justify-content-center align-self-center'>
        <div className="form-floating mb-3">
        <label htmlFor="floatingPassword">Name</label>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Name" />
        </div>
        <div className="form-floating mb-3 ">
        <label htmlFor="floatingInput">Username</label>
        <input type="email" className="form-control" id="floatingInput" placeholder="user" />
        </div>
        <div className="form-floating">
        <label htmlFor="floatingPassword">Password</label>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        </div>
        <div className="submit">
            <button type="submit" className='btn btn-primary mt-3'>Login</button>
        </div>
        </div>
        </>
    )
}

export default Register

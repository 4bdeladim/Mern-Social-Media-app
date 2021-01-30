import React from 'react'
import Navbar from '../components/Navbar'


const Logout = () => {
    return (
        <div>
            <Navbar Next="Login" path='/' />
            <div className="alert alert-dark" role="alert">
                You have been logout!
            </div>
        </div>
    )
}

export default Logout

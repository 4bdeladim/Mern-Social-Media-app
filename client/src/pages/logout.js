import React, { useEffect } from 'react'
import { logout } from '../actions/auth'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    const logoutfromtheaccount = () => {
        dispatch(logout());
    }
    useEffect(() => {
        if(auth) {
            logoutfromtheaccount()
        }
    })
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

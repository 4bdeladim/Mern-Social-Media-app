import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({Next, path}) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" rel="noreferrer" href="https://github.com/4bdeladim/Mern-Social-Media-app" target="_blank">Github repo</a>
    <Link to={path}>
    <button className="btn btn-outline-danger " type="submit">{Next}</button>
    </Link>
    </div>
    </nav>
    )
}

export default Navbar

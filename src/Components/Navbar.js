import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-body-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/alert">Alert</Link>
            </div>
        </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar

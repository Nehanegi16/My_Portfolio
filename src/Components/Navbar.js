import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg  p-3 mb-2 bg-transparent text-body ">
  <div className="container-fluid">
    <Link className="navbar-brand link-info" to="/"><h3>Neha's Portfolio</h3></Link>
    <button className="navbar-toggler p-1 mb-0 bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5   ">
        <li className="nav-item">
          <Link className="nav-link active mx-3 text-light" aria-current="page" to="/"><h6>Home</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3 text-light" to="/about "><h6>About</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3 text-light" to="/project"><h6>Project</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3 text-light " to="/contect"><h6>Contact me</h6></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navbar
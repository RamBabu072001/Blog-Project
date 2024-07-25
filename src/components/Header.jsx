import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineAlipayCircle } from "react-icons/ai";

function Header() {
  return (
    
        <div className=''>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to=""><AiOutlineAlipayCircle size={50}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
<Link className="nav-link active" aria-current="page" href="#" to="">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link"  to="/Blog">Blog</Link>
</li>
<li className="nav-item">
<Link className="nav-link"  to="/About">About</Link>
</li>
<li className="nav-item">
<Link className="nav-link"  to="/Contact">Contact</Link>
</li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link to="/Register"><button className='btn btn-success mx-2'>SignUp</button></Link>
    </div>
  </div>
</nav>

        </div>
    
  )
}

export default Header



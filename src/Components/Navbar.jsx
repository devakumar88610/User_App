import React from "react";
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center py-3'>
        <a className='navbar-brand mr-5' style={{color: 'orange', fontWeight: '600', fontSize: '24px'}} href='/'>
          Redux App
        </a>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>
        </ul>
      </nav>
    </div>
  );
};

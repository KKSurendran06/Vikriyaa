import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png' ;


const Navbar = () => {
    return(
        <div className='Navbar-parent'>
         <a href='/'><img className="logo" src={logo} alt='logo' /></a> 
            <nav className='navbar'>
              <li>
                 <Link to='/about'>About Us</Link>
              </li>
              <li>
                 <Link to='/join'>Join Us</Link>
              </li>
              <li>
                 <Link to='/impact'>Our Impact</Link>
              </li>
            </nav>
        </div>
    )
}

export default Navbar;
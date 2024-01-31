import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png' ;


const Navbar = () => {
    return(
        <div className='Navbar-parent'>
         <a href='/'><img className="logo" src={logo} alt='logo' /></a> 
            <nav className='navbar'>
              <li>
                 <Link to='#'>About us</Link>
              </li>
              <li>
                 <Link to='#'>Our mission</Link>
              </li>
              <li>
                 <Link to='#'>Join us</Link>
              </li>
            </nav>
        </div>
    )
}

export default Navbar;
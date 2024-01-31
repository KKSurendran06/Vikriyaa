import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png' ;


const Navbar = () => {
    return(
      <div className='navbar'>
         <div className='navbar-left'>
            <a href='/'><img className='logo' src={logo} alt=' '/></a> 
         </div>
         <div className='navbar-right'>
            <li>
               <Link to='#'>About us</Link>
            </li>
            <li>
               <Link to='#'>Our mission</Link>
            </li>
            <li>
               <Link to='#'>Join us</Link>
            </li>
         </div>
      </div>
   )
}

export default Navbar;
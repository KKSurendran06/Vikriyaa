import React from 'react';
import logo from '../assets/logo.png' ;


const Navbar = () => {
    return(
      <div className='navbar'>
         <div className='navbar-left'>
            <a href='/'><img className='logo' src={logo} alt=' '/></a> 
         </div>
         <div className='navbar-right'>
            <li>
               <a href='/#about'>About us</a>
            </li>
            <li>
               <a href='/#mission'>Our mission</a>
            </li>
            <li>
               <a href='/#join'>Join us</a>
            </li>
         </div>
      </div>
   )
}

export default Navbar;
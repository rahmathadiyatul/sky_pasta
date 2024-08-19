import React, { useState } from 'react';
import './Header.css';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <header className='left-header'>
        <div className='full-logo'>
          <Link to='/landing-page'>
            <img
              className='logo'
              src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1723917219/skypasta/skypasta_logo_n7phhg.png"
              alt="skypasta-logo"
            />
          </Link>
        </div>
        <nav className='navbar'>
        {/* <Box class='menu' onClick={toggleNavbar}>
            <Menu sx={{ height: '2em', width: '2em' }}></Menu>
            {openNavbar && (
            <ul style={{ backgroundColor: 'white', marginTop: '2em', width: '8.5em', paddingLeft: '2em', marginRight: '2em' }} className='dropdown'>
                <li><Link class='dropdown-items' to='/home'>Home</Link></li>
                <li><Link class='dropdown-items' to='/projects'>Services</Link></li>
                <li><Link class='dropdown-items' to='/about-us'>About Us</Link></li>
                <li><Link class='dropdown-items' to='/contact-us'>Contact Us</Link></li>
            </ul>
            )}
        </Box> */}
            <ul className='nav-items'>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/about-us'>About</Link></li>
                <li><Link to='/outlets'>Outlets</Link></li>
            </ul>
        </nav>
      </header>
    </div >
  );
}

export default Header;

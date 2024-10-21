import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer'>
            <Box class='upper-footer'>
                <Box class='left-footer'>
                    <div className='full-logo'>
                        <Link to='/landing-page'>
                            <img
                            className='logo'
                            src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png"
                            alt="skypasta-logo"
                            />
                        </Link>
                    </div>
                </Box>
                <Box class='right-footer'></Box>
            </Box>
            <Box class='lower-footer'>
                <span>Copyright &copy; 2024 <b>Sky Pasta</b></span>
            </Box>
        </div>
    );
};

export default Footer;

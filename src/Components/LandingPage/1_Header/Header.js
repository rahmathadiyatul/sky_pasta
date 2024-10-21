import React, { useState } from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import './Header.css';

function Header() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#c72026', height: {xs: 90, sm: 100, md: 110}, justifyContent: 'space-between'}}>
        <Link to='/landing-page'>
            <CardMedia
                sx={{ width: 90, height: 60, ml: 3, mt: 2}}
                image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1723917219/skypasta/skypasta_logo_n7phhg.png'
                title='sky-pasta-logo'
            ></CardMedia>
        </Link>
        <Box sx={{ width: {xs: 200, sm: 300, md: 400}, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', mr: 3 }}>
            <StyledLink  to='/home'>
                <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>Menu</Typography>
            </StyledLink >
            <StyledLink  to='/about-us'>
                <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>About</Typography>
            </StyledLink >
            <StyledLink  to='/outlets'>
                <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>Outlets</Typography>
            </StyledLink >
        </Box>
    </Box>)
}

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'white',
    position: 'relative',
    transition: 'color 0.3s ease, padding-bottom 0.3s ease',
    '&:hover': {
        color: '#f7dfaf',
        textShadow: '0 0 50px rgba(0, 0, 0, 0.1)',
        textDecoration: 'underline',
        paddingBottom: '3%',
    },
}));

export default Header;

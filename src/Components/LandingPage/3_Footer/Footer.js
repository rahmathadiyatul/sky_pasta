import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

const Footer = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: {xs: 100, sm: 100, md: 150}, backgroundColor: 'black'}}>
            <Box>
                <CardMedia
                    sx={{ width: {xs: 90, sm: 120, md: 150}, height: {xs: 60, sm: 80, md: 100}, ml: 3, mt: 3}}
                    image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png'
                    title='sky-pasta-black-bg'
                >
                </CardMedia>
            </Box>
            <Box sx={{ alignItems: 'flex-end', width: '100%', height: 100, backgroundColor: 'black', pb: {xs: 2, sm: 0, md: 0}}}>
                <Typography sx={{textAlign: 'center', color: 'white'}}>
                    Copyright &copy; 2024 <b>Sky Pasta</b>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;

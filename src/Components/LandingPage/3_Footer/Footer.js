import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

const Footer = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', height: {xs: 100, sm: 100, md: 150}, backgroundColor: 'black'}}>
            <Box>
                <CardMedia
                    sx={{ width: 90, height: 60, ml: 3, mt: 3}}
                    image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png'
                    title='sky-pasta-black-bg'
                >
                </CardMedia>
            </Box>
            <Box sx={{width: '100%', height: 100, backgroundColor: 'black', pb: 2}}>
                <Typography sx={{textAlign: 'center', color: 'white'}}>
                    Copyright &copy; 2024 <b>Sky Pasta</b>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;

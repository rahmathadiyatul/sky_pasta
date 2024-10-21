import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import './BodyPreview.css'

const OurHistory = () => {
    const images = [
        '/sky_pasta_retro1.png',
        '/sky_pasta_retro2.png',
        '/sky_pasta_retro3.png',
        '/sky_pasta_retro4.png',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: {xs: 300, sm: 400, md: 600} }}>
            <Typography
                sx={{
                    textAlign: {xs: 'left', sm: 'left', md: 'left'},
                    width: {xs: 380, sm: 750, md: 1000},
                    fontSize: {xs: 30, sm: 40, md: 50},
                    fontWeight: {xs: 'bolder', sm: 700, md: 400},
                    fontFamily: 'nunito',
                    borderTop: '10px solid black',
                    lineHeight: {xs: 1, sm: 2, md: 3},
                    pt: {xs: 0, sm: 2, md: 3},
                    pb: {xs: 1, sm: 2, md: 3},
                    mb: {xs: 3, sm: 0, md: 0},
                    color: {xs: 'white', sm: 'black', md: 'black'},
                    backgroundColor: {xs: 'black', sm: 'rgba(0,0,0,0)', md: 'rgba(0,0,0,0)'},
                }}
            >It started here . . .</Typography>
            <Box
                sx={{
                    borderRadius: {xs: 2, sm: 3, md: 4},
                    width: {xs: '80%', sm: '90%', md: '100%'},
                    height: {xs: 200, sm: 300, md: 400},
                    background: `url(${images[currentImageIndex]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    transition: 'background-image 1s ease-in-out'
                }}
            ></Box>
        </Box >
    )
}

export default OurHistory

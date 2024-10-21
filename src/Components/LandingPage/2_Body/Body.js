import React, { useState, useEffect } from 'react';
import './Body.css';
import OurPartners from './BodyPreview/OurPartners';
import OurHistory from './BodyPreview/OurHistory';
import OurActivity from './BodyPreview/OurActivity';
import { Box } from '@mui/material';

const Body = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100vw',
                    height: {xs: '180vh', sm: '300vh', md: '350vh'},
                    background: `
                        linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)),
                        url(/sky_pasta.png)
                    `,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                noValidate
                autoComplete="off"
            >   
                <Box sx={{height: 450, width: {xs: 380, sm: 750, md: 1000}, my: 5, border: '7px solid #c72026', borderRadius: 10}}>
                    <iframe 
                        style={{width: '100%', height: '100%', borderRadius: '35px'}}
                        src="https://www.youtube.com/embed/kIzruBLIs3Y" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </Box>
                {/* <OurPartners></OurPartners> */}
                <OurHistory></OurHistory>
                <OurActivity></OurActivity>
            </Box>
        </Box>
    );
};

export default Body;

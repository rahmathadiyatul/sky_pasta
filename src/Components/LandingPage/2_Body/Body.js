import React, { useState, useEffect } from 'react';
import './Body.css';
import OurPartners from './OurPartners/OurPartners';
import { Box } from '@mui/material';

const Body = () => {
    return (
        <div className='body'>
            <iframe 
                className='video-teaser' 
                src="https://www.youtube.com/embed/iZ-fAjeVz8o" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Body;

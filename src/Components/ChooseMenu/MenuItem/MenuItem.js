import React, { useState, useEffect } from 'react';
import { MenuBook } from '@mui/icons-material';
import '../MenuItem/MenuItem.css'
import { Typography } from '@mui/material';
import '@fontsource/roboto';

const MenuItem = (param) => {
    const { isHidden } = param
    return (
        <div className='menu-item-container' style={{ display: isHidden ? 'flex' : 'none' }}>
            <div className='div-image'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157379/skypasta/2_supf1m.png'></img>
            </div>
            <div className='menu-name'>
                <Typography variant="h6" gutterBottom>Most Ordered Menu</Typography>
                <Typography variant='h2' sx={{ fontWeight: 'lighter', fontSize: '3em' }}>SAMBA LADO</Typography>
                <Typography variant='h1' sx={{ fontWeight: 'bolder', fontSize: '4em' }}>SPAGHETTI</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '.5em' }}>
                    <MenuBook></MenuBook>
                    <p>  Order Menu</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

import React, { useState, useEffect } from 'react';
import '../ChooseMenu/ChooseMenu.css'
import MenuItem from './MenuItem/MenuItem'
import LowerItem from './LowerItem/LowerItem';

const ChooseMenu = () => {
    return (
        <div className='menu-container'>
            <div className='upper-menu'>
                <MenuItem></MenuItem>
                <MenuItem isHidden={true}></MenuItem>
            </div>
            <div className='lower-menu'>
                <LowerItem menuName='Spaghetti' imgUrl='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157379/skypasta/2_supf1m.png'></LowerItem>
                <LowerItem menuName='Pasta' imgUrl='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157378/skypasta/1_jl9jtt.png'></LowerItem>
            </div>
        </div>
    );
};

export default ChooseMenu;

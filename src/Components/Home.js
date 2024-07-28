import React, { useState, useEffect } from 'react';
import './Home.css';
import ChooseMenu from '../Components/ChooseMenu/ChooseMenu'
import MenuDetails from '../Components/MenuDetails/MenuDetails'

const Home = () => {
    return (
        <div className='container'>
            <div className='background-image'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722153241/skypasta/Untitled_design_w1vm2w.png' alt='background' />
            </div>
            <ChooseMenu class='choose-menu'></ChooseMenu>
            <MenuDetails class='menu-details'></MenuDetails>
        </div>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import './Home.css';
import ChooseMenu from '../Components/ChooseMenu/ChooseMenu'
import MenuDetails from '../Components/MenuDetails/MenuDetails'
import Header from '../Components/LandingPage/1_Header/Header'

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState('Samba Lado Spaghetti');

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <ChooseMenu onMenuChange={handleMenuChange} class='choose-menu'></ChooseMenu>
                <MenuDetails selectedMenu={selectedMenu} class='menu-details'></MenuDetails>
            </div>
        </div>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import './Home.css';
import ChooseMenu from '../Components/ChooseMenu/ChooseMenu'
import MenuDetails from '../Components/MenuDetails/MenuDetails'

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState('Samba Lado Spaghetti');

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <div className='container'>
            <div className='background-image'>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722153241/skypasta/Untitled_design_w1vm2w.png' alt='background' />
            </div>
            <ChooseMenu onMenuChange={handleMenuChange} class='choose-menu'></ChooseMenu>
            <MenuDetails selectedMenu={selectedMenu} class='menu-details'></MenuDetails>
        </div>
    );
};

export default Home;

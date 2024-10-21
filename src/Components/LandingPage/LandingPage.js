import React, { useState, useEffect } from 'react';
import Header from './1_Header/Header';
import Body from './2_Body/Body';
import Footer2 from './3_Footer/Footer2';
import Footer from './3_Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    const [selectedMenu, setSelectedMenu] = useState('Samba Lado Spaghetti');

    const handleMenuChange = (menu) => {
        setSelectedMenu(menu);
    };
    return (
        <div className='landing'>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;

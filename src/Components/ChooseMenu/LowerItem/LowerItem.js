import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const LowerItem = (param) => {
    const { menuName, imgUrl } = param
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ width: '5em' }} src={imgUrl}></img>
            <Typography>{menuName}</Typography>
        </div>
    );
};

export default LowerItem;

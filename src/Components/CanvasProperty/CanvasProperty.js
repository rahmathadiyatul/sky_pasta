import React, { useState, useEffect } from 'react';
import { Button, Input } from '@mui/joy';
import './../Home.css';

const CanvasProperty = ({ width, height, onCanvasSizeChange, isImageUploaded }) => {
    const [canvasWidth, setCanvasWidth] = useState(width);
    const [canvasHeight, setCanvasHeight] = useState(height);

    useEffect(() => {
        setCanvasWidth(width);
        setCanvasHeight(height);
    }, [width, height]);

    const handleChangeWidth = (event) => {
        setCanvasWidth(event.target.value);
    };

    const handleChangeHeight = (event) => {
        setCanvasHeight(event.target.value);
    };

    const handleApplyChanges = () => {
        onCanvasSizeChange(parseInt(canvasWidth, 10), parseInt(canvasHeight, 10));
    };

    return (
        <div className='canvas-properties'>
            <h2>Canvas Properties</h2>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        Width
                    </Button>
                } variant='soft' id="canvas-width" value={canvasWidth} onChange={handleChangeWidth}></Input>
            </span>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        Height
                    </Button>
                } variant='soft' id="canvas-height" value={canvasHeight} onChange={handleChangeHeight}></Input>
            </span>
            <Button disabled={isImageUploaded} onClick={handleApplyChanges}>Change Size</Button>
        </div>
    );
};

export default CanvasProperty;

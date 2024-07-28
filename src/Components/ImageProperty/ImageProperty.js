import React, { useState, useEffect } from 'react';
import { Button, Input } from '@mui/joy'
import './../Home.css'

const ImageProperty = ({ width, height, xCoordinate, yCoordinate, onImageSizeChange }) => {
    const [imageWidth, setImageWidth] = useState(width);
    const [imageHeight, setImageHeight] = useState(height);
    const [imgXCoordinate, setImgXCoordinate] = useState(xCoordinate);
    const [imgYCoordinate, setImgYCoordinate] = useState(yCoordinate);

    useEffect(() => {
        setImageWidth(width);
        setImageHeight(height);
        setImgXCoordinate(xCoordinate);
        setImgYCoordinate(yCoordinate);
    }, [width, height, xCoordinate, yCoordinate]);

    const handleChangeWidth = (event) => {
        setImageWidth(event.target.value);
    };

    const handleChangeHeight = (event) => {
        setImageHeight(event.target.value);
    };

    const handleChangeX = (event) => {
        setImgXCoordinate(event.target.value);
    };

    const handleChangeY = (event) => {
        setImgYCoordinate(event.target.value);
    };

    const handleApplyChanges = () => {
        onImageSizeChange(parseInt(imageWidth, 10), parseInt(imageHeight, 10), parseInt(imgXCoordinate, 10), parseInt(imgYCoordinate, 10));
    };
    return (
        <div className='image-properties'>
            <h2>Image Properties</h2>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        X
                    </Button>
                } variant='soft' id="x-coordinate" value={imgXCoordinate} onChange={handleChangeX}></Input>
            </span>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        Y
                    </Button>
                } variant='soft' id="canvas-height" value={imgYCoordinate} onChange={handleChangeY}></Input>
            </span>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        Width
                    </Button>
                } variant='soft' id="image-width" value={imageWidth} onChange={handleChangeWidth}></Input>
            </span>
            <span className='user-input'>
                <Input startDecorator={
                    <Button disabled variant="solid" color="primary">
                        Height
                    </Button>
                } variant='soft' id="image-height" value={imageHeight} onChange={handleChangeHeight}></Input>
            </span>
            <Button onClick={handleApplyChanges}>Change Size</Button>
        </div>
    )
}

export default ImageProperty

import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, Snackbar, Alert } from '@mui/joy';
import ImageProperty from './ImageProperty/ImageProperty';
import CanvasProperty from './CanvasProperty/CanvasProperty';
import './Home.css';

const Home = () => {
    const [isImagePropShown, setIsImagePropShown] = useState(false);
    const [filename, setFilename] = useState("Tidak ada file yang dipilih");
    const [imageData, setImageData] = useState(null);
    const [canvasWidth, setCanvasWidth] = useState(640);
    const [canvasHeight, setCanvasHeight] = useState(360);
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [imageXCoordinate, setImageXCoordinate] = useState(0);
    const [imageYCoordinate, setimageYCoordinate] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Please input Image file type!");
    const canvasRef = useRef(null);

    useEffect(() => {
        handleCanvasSizeChange(canvasWidth, canvasHeight)
    }, [])

    const onUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError(true);
                setErrorMessage('Please input Image file type!');
                return;
            }
            setError(false)
            setFilename(file.name);
            setIsImagePropShown(true);

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    let imgWidth = img.width;
                    let imgHeight = img.height;

                    if (imgWidth > canvas.width) {
                        imgWidth = canvas.width;
                    }
                    if (imgHeight > canvas.height) {
                        imgHeight = canvas.height;
                    }
                    setImageWidth(imgWidth);
                    setImageHeight(imgHeight);
                    setImageXCoordinate(0);
                    setimageYCoordinate(0);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
                    setImageData(e.target.result);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCanvasSizeChange = (width, height) => {
        if (width < 100) {
            setError(true);
            setErrorMessage('Minimum Canvas Size is 100 x 100!')
            return;
        } else if (height < 100) {
            setError(true);
            setErrorMessage('Minimum Canvas Size is 100 x 100!')
            return;
        } else {
            setError(false);
            setErrorMessage("Please input Image file type!")
        }
        setCanvasWidth(width);
        setCanvasHeight(height);
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            if (imageData) {
                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, width, height);
                };
                img.src = imageData;
            }
        }
    };

    const handleImageSizeChange = (width, height, xCoordinate, yCoordinate) => {
        if (imageData) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            setImageWidth(width);
            setImageHeight(height);
            setImageXCoordinate(xCoordinate);
            setimageYCoordinate(yCoordinate);

            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, xCoordinate, yCoordinate, width, height);
            };
            img.src = imageData;
        }
    }

    return (
        <div className='container'>
            <Snackbar open={error} variant='outlined' color='danger' sx={{ justifyContent: 'center', position: 'relative', marginTop: '2em' }}>
                <Alert color='danger' variant='soft' severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
            <div className='editor'>
                <CanvasProperty width={canvasWidth} height={canvasHeight} onCanvasSizeChange={handleCanvasSizeChange} isImageUploaded={isImagePropShown} />
                <canvas className='image-field' ref={canvasRef}></canvas>
                {
                    isImagePropShown
                        ?
                        <ImageProperty
                            xCoordinate={imageXCoordinate}
                            yCoordinate={imageYCoordinate}
                            width={imageWidth}
                            height={imageHeight}
                            onImageSizeChange={handleImageSizeChange} />
                        :
                        null
                }
            </div>
            <span className='file-upload'>
                <Input startDecorator={
                    <Button variant="solid" color="primary" component="label">
                        Pilih file
                        <input type="file" hidden accept="image/*" onChange={onUpload} />
                    </Button>
                } variant='soft' id="upload-image" sx={{ width: '30vw' }}
                    placeholder={filename} readOnly></Input>
            </span>
        </div>
    );
};

export default Home;

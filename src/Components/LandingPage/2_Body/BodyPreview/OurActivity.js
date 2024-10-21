import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import './BodyPreview.css'

const OurActivity = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: 'row'}, alignItems: 'center', height: 'max-content', borderTop: '10px solid black', }}>
            <Box sx={{ mt: {xs: 2, sm: 5, md: 10}, display: 'flex', flexDirection: 'column', alignItems: {xs: 'flex-start', sm: 'center', md: 'center'}, justifyContent: 'center' }}>
                <Typography
                    sx={{
                        textAlign:'left',
                        width: {xs: 300, sm: 400, md: 500},
                        fontSize: 50,
                        fontWeight: 'bolder',
                        fontFamily: 'nunito',
                        lineHeight: 1 
                    }}>Sky Pasta</Typography>
                <Typography
                    sx={{
                        textAlign:'left',
                        width: {xs: 300, sm: 400, md: 500},
                        fontSize: 50,
                        fontFamily: 'nunito',
                        lineHeight: 1 
                    }}>Activities</Typography>
                <Typography
                    sx={{
                        mt: 5,
                        mr: 4,
                        textAlign: {xs: 'right', sm: 'left', md: 'left'},
                        width: {xs: 300, sm: 400, md: 500},
                        fontSize: 16,
                        fontFamily: 'roboto'
                    }}>Apa ya? Apa nih? Sky Pasta ngapain sih? Gatau deh ngapain coba? Ini di sini mau diisi apa aku juga bingung, kunaon maneh teh? Ini teh naon coba? Apa ya apa dong? Panjangin lagi deh, panjaaaaaaaaang ayo lebih panjang.</Typography>
            </Box>
            <Box sx={{ mt: 10 }}>
                <Box
                    sx={{
                        border: '2px solid black',
                        borderRadius: 4,
                        width: {xs: 300, sm: 400, md: 500},
                        height: {xs: 300, sm: 400, md: 500},
                        background: `url(/sky_pasta_act.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        mb: {xs: 5, sm: 0, md: 0}
                    }}
                ></Box>
            </Box>
        </Box >
    )
}

export default OurActivity

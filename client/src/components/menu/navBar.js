import React from 'react';
import { Box, AppBar, Container } from '@mui/material';
import logo from '../../assets/img/logo.png'
import '../menu/navBar.css';

export default function Navbar() {
    return (
        <Box>
            <AppBar sx={{ bgcolor: '#1A2238' }}>
                <Container sx={{width: '60vw'}}>
                    <img src={logo} alt="logo" height="50" width="200"/>
                </Container>
            </AppBar>
        </Box>
    )
}
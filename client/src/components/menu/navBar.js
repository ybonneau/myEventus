import React from 'react';
import { Box, AppBar, Grid, Button, Toolbar } from '@mui/material';
import logo from '../../assets/img/logo.png'
import '../menu/navBar.css';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={"appBar"}>
                <Toolbar sx={{width: '60vw', margin:'auto'}}>
                    <Grid component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" height="50" width="200"/>
                    </Grid>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
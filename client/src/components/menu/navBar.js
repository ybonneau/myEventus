import React from 'react';
import { Box, AppBar, Grid, Button, Toolbar } from '@mui/material';
import logo from '../../assets/img/logo.png'
import SvgIcon from '@mui/material/SvgIcon';
import '../menu/navBar.css';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar class="appBar">
                <Toolbar sx={{ width: '80vw', margin: 'auto' }}>
                    <Grid component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" height="50" width="200" />
                    </Grid>
                    <Button><HomeIcon sx={{ color: "white" }} /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
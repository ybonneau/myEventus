import React from 'react';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';

export default function Footer() {
    return (
        <AppBar position="static" style={{position:"fixed",bottom:0}} color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        © 2021 MyEventus
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
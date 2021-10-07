import React from 'react';
import { Box,Typography,AppBar } from '@mui/material';

export default function Navbar() {
    return (
        <Box>
            <AppBar style={{ backgroundColor: "#ab47bc" }}>
                <Typography variant="h3">
                    MyEventus
                </Typography>
            </AppBar>
        </Box>
    )
}
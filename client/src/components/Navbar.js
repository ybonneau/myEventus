import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@mui/material/Box';


const Navbar = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar>
            <Toolbar variant="dense">
                <Typography variant="title" color="inherit">
                    MyEventus
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}
export default Navbar;
import { Box } from "@mui/material";
import SearchForm from "./searchForm";
import '../home/home.css';
import * as React from 'react';

export default function FilterContent({update}) {
    return (
        <>
            <Box sx={{
                boxShadow: 2,
                width: '50vw',
                bgcolor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '5vh',
                borderRadius: '5px',
                paddingTop: '2vh',
                paddingRight: '4vw',
                paddingLeft: '4vw',
                paddingBottom:'2vh'
            }}>
                <SearchForm updateDate={update}/>
            </Box>
        </>
    )
}
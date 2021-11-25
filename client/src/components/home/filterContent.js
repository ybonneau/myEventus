import { Box } from "@mui/material";
import SearchForm from "./searchForm";

export default function FilterContent() {
    return (
        <>
            <Box sx={{
                boxShadow: 3,
                width: '60vw',
                bgcolor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10vh',
                borderRadius: '5px',
                paddingTop: '2vh',
                paddingRight: '4vw',
                paddingLeft: '4vw',
                paddingBottom:'2vh'
            }}>
                <SearchForm />
            </Box>
        </>

    )
}
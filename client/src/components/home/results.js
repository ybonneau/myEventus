import { Card, Container, Grid } from "@mui/material";
import { Typography, CircularProgress, Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Result() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/evenement/first")
            .then(res => res.json())
            .then((data) => {
                setData(data);
                setIsLoaded(true)
            })
    }, [])
    if(!isLoaded) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    } else {
        console.log(data)
        return (
            data.map((event) => {
                return (<Container sx={{ marginTop: "20px" }}>
                    <Card className="content">
                        <Grid container sx={{padding: "2vh"}}>
                            <Grid xs={3} sx={{margin: "auto",}}>
                                <Stack>
                                    <Typography className="name" variant="h5">{event.titre.length > 14 ? event.titre.substr(0, 15) + "..." : event.titre}</Typography>
                                    <Typography className="place" variant="h7">{event.ville} - {event.place}</Typography>
                                    <Typography variant="caption">{event.dateDebut} - {event.dateFin}</Typography>
                                </Stack>
                            </Grid>
                            {event.description ?
                                <Grid xs={8} sx={{margin: "auto"}}><Typography align="justify" variant="body1">{event.description.length > 300 ? event.description.substr(0, 300) + "..." : event.description}</Typography></Grid>
                                : <Grid xs={8} sx={{margin: "auto"}}><Typography align="justify" variant="body1">Pas de description...</Typography></Grid> 
                            }
                        </Grid>
                    </Card>
                </Container>)
            })
        )   
    }
}
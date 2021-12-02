import { Card, Container, Grid } from "@mui/material";
import { test } from "../test/test";
import { Typography } from '@mui/material';
import '../home/home.css';

export default function Result() {
    const data = test
    return (
        <Container sx={{ marginTop: "20px" }}>
            <Card className="content">
                <Grid container sx={{padding: "2vh"}}>
                    <Grid xs={3} sx={{margin: "auto",}}>
                        <Typography className="name" variant="h4">{data.titre}</Typography>
                        <Typography className="place" variant="h6">{data.ville} - {data.place}</Typography>
                        <Typography variant="caption">{data.dateDebut} - {data.dateFin}</Typography>
                    </Grid>
                    <Grid xs={8} sx={{margin: "auto"}}><Typography align="justify" variant="body1">{data.description.length > 200 ? data.description.substr(0, 300) + "..." : data.description}</Typography></Grid>
                </Grid>
            </Card>
        </Container>
    )
}
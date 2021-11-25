import { Card, Container, Grid } from "@mui/material";
import { test } from "../test/test";
import { Typography } from '@mui/material';

export default function Result() {
    const data = test
    return (
        <Container sx={{ marginTop: "20px" }}>
            <Card className="content">
                <Grid container>
                    <Grid xs={3} sx={{margin: "auto"}}>
                        <Typography variant="h4">{data.titre}</Typography>
                        <Typography variant="h6">{data.ville} - {data.place}</Typography>
                        <Typography variant="caption">{data.dateDebut} - {data.dateFin}</Typography>
                    </Grid>
                    <Grid xs={8} sx={{margin: "auto"}}><Typography variant="body1">{data.description}</Typography></Grid>
                </Grid>
            </Card>
        </Container>
    )
}
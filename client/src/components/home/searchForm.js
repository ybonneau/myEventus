import { Grid, Slider, Typography, Autocomplete, TextField } from "@mui/material"
/* import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'; */
import { cities } from "./cities"

const marks = [
    {
      value: 0,
      label: '0km',
    },
    {
      value: 40,
      label: '40km',
    },
];

export default function SearchForm() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography variant="button" gutterBottom>Lieu</Typography>
            <Autocomplete
                id="ville"
                options={cities.map((option) => option.city)}
                renderInput={(params) => <TextField {...params} label="Entrez une ville" />}
            />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="button" gutterBottom>Distance</Typography>
                <Slider
                    aria-label="Distance"
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={5}
                    min={0}
                    max={40}
                    color='secondary'
                    marks={marks}
                    />
            </Grid>
            <Grid item xs={6}>
{/*                 <Typography variant="button" gutterBottom>Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}
            </Grid>
        </Grid>
    )
}
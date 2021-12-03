import { Grid, Slider, Typography, Autocomplete, TextField, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { cities } from "./cities";

import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';

import * as React from 'react';

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

const PrettoSlider = styled(Slider)({
    color: '#FF6A3D',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#FFF',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#FF6A3D',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
});

export default function SearchForm({children}) {

  const [value, setValue] = React.useState(new Date());
    return (
        <Grid container
        alignItems="center"
        justifyContent="center"
        rowSpacing={2} columnSpacing={4}>
            <Grid item xs={6}>
            <Typography sx={{color: ''}} variant="button" gutterBottom>Lieu</Typography>
            <Autocomplete sx={{ "& .MuiInputBase-input.MuiAutocomplete-input": { color: "#1A2238" } }}
                id="ville"
                options={cities.map((option) => option.city)}
                renderInput={(params) => <TextField {...params} label="Entrez une ville" />}
            />
            </Grid>
            <Grid item xs={6}>
                <Typography sx={{color: ''}} variant="button" gutterBottom>Distance</Typography>
                <PrettoSlider
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
            <Grid item xs={12}>
            <Typography variant="button"  sx={{display: "block"}} gutterBottom>Date</Typography>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                    label=""
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
          </Grid>
          <Grid item justifyContent="center">
            <Button className="search" variant="contained">Rechercher</Button>
          </Grid>
        </Grid>
    )
}
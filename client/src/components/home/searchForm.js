import {
  Grid,
  Slider,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { cities } from "./cities";

import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";

import * as React from "react";

const marks = [
  {
    value: 0,
    label: "0km",
  },
  {
    value: 1000,
    label: "1000km",
  },
];

const PrettoSlider = styled(Slider)({
  color: "#FF6A3D",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#FFF",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FF6A3D",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function SearchForm({ updateDate, updateCity, updateDistance }) {
  const [date, setDate] = React.useState(new Date());
  const [city, setCity] = React.useState("");
  const [distance, setDistance] = React.useState(10);

  const handleChange = (event, newValue) => {
    setDistance(newValue);
    updateDistance(newValue);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      rowSpacing={2}
      columnSpacing={4}
    >
      <Grid item xs={6}>
        <Typography sx={{ color: "" }} variant="button" gutterBottom>
          Lieu
        </Typography>
        <Autocomplete
          sx={{
            "& .MuiInputBase-input.MuiAutocomplete-input": { color: "#1A2238" },
          }}
          id="ville"
          value={city}
          options={cities.map((option) => option.city)}
          renderInput={(params) => (
            <TextField {...params} label="Entrez une ville" />
          )}
          onChange={(event, newValue) => {
            setCity(newValue);
            updateCity(newValue);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ color: "" }} variant="button" gutterBottom>
          Distance
        </Typography>
        <PrettoSlider
          aria-label="Distance"
          defaultValue={10}
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={1000}
          color="secondary"
          marks={marks}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="button" sx={{ display: "block" }} gutterBottom>
          Date
        </Typography>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            inputFormat="DD/MM/YYYY"
            format="DD/MM/YYYY"
            label=""
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
              updateDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}

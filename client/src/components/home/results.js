import { Card, Container, Grid } from "@mui/material";
import { Typography, CircularProgress, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Result({ date, city, distance }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const [copyData, setCopyData] = useState({})
  const [oldDate, setOldDate] = useState();
  const [oldCity, setOldChange] = useState();
  const [oldDistance, setOldDistance] = useState();

  if (oldDistance != distance) {
    getposition();
    setOldDistance(distance)
  }

  if (oldCity != city) {
    if (city) {
      console.log(city);
      fetch(`http://localhost:8080/evenement/getByCity?city=${city}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoaded(true);
          setOldChange(city);
          setCopyData(data);
        });
    }
  }

  if (oldDate != moment(date).format("YYYY-MM-DD")) {
    if (date) {
      date = moment(date).format("YYYY-MM-DD");
      fetch(`http://localhost:8080/evenement/getByDate?date=${date}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoaded(true);
          setCopyData(data);
          setOldDate(date);
        });
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/evenement/first")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCopyData(data);
        setIsLoaded(true);
      });
  }, []);

  function success(position) {
    //let tab = useState([]);
    let tab = [];

    //console.log("Latitude is :", position.coords.latitude);
    //.log("Longitude is :", position.coords.longitude);
    var lon1 = position.coords.longitude;
    var lat1 = position.coords.latitude;
    tab.push(lat1);
    tab.push(lon1);
    //console.log(tab)
    if (tab.length != 0) {
      geo2(tab, distance);
    }
  }

  function getposition() {
    navigator.geolocation.getCurrentPosition(function (pos) {
      success(pos);
    });
  }

  function diff_position(lat1, lon1, lat2, lon2) {
    // Haversine formula
    var lon1 = lon1 * Math.PI / 180;
    var lon2 = lon2 * Math.PI / 180;
    var lat1 = lat1 * Math.PI / 180;
    var lat2 = lat2 * Math.PI / 180;
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return c * r;
  }

  function geo2(tab1, distance) {
    const donnes = copyData
    let tab2 = [];
    for (let i = 0; i < donnes.length; i++) {
      //let position = donnes[i];
      //console.log(donnes[i].latlong)
      var sentence = donnes[i].latlong.split(",");
      //console.log(sentence)
      let lat1 = tab1[0];
      let lon1 = tab1[1];
      let lat2 = sentence[0];
      let lon2 = sentence[1];
      let dis1 = diff_position(lat1, lon1, lat2, lon2);
      //console.log(distance)
      if (dis1 <= distance) {
        tab2.push(donnes[i]);
      }
      //geo1(donnes[i][i]);
    }
    setData(tab2)
    return tab2;
  }

  if (!isLoaded) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    //console.log(data);
    return data.map((event) => {
      return (
        <Container sx={{ marginTop: "20px" }}>
          <Card className="content">
            <Grid container sx={{ padding: "2vh" }}>
              <Grid xs={3} sx={{ margin: "auto" }}>
                <Stack>
                  {event.titre ? (
                    <Typography className="name" variant="h5">
                      {event.titre.length > 14
                        ? event.titre.substr(0, 15) + "..."
                        : event.titre}
                    </Typography>
                  ) : (
                    <Typography className="name" variant="h5">
                      Pas de titre
                    </Typography>
                  )}
                  <Typography className="place" variant="h7">
                    {event.ville} - {event.place}
                  </Typography>
                  <Typography variant="caption">
                    {event.dateDebut} - {event.dateFin}
                  </Typography>
                </Stack>
              </Grid>
              {event.description ? (
                <Grid xs={8} sx={{ margin: "auto" }}>
                  <Typography align="justify" variant="body1">
                    {event.description.length > 300
                      ? event.description.substr(0, 300) + "..."
                      : event.description}
                  </Typography>
                </Grid>
              ) : (
                <Grid xs={8} sx={{ margin: "auto" }}>
                  <Typography align="justify" variant="body1">
                    Pas de description...
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Card>
        </Container>
      );
    });
  }
}

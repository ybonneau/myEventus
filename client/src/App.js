import Navbar from "./components/menu/navBar";
import FilterContent from "./components/home/filterContent";
import Result from "./components/home/results";
import * as React from "react";
import moment from "moment";

export default function App() {
  const [date, updateDate] = React.useState();
  const [city, updateCity] = React.useState();
  const [distance, updateDistance] = React.useState();
  return (
    <div>
      <Navbar />
      <FilterContent date={updateDate} city={updateCity} distance={updateDistance}/>
      <Result date={date} city={city} distance={distance}/>
      <br />
    </div>
  );
}

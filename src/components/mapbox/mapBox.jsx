
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { NavbarContainer } from "../Header/NavbarElements";
import { Container } from "@mui/material";
function GPS2() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);

  return (
    <div className="App">
    {/* {console.log(process.env.REACT_APP_MAP_KEY)} */}
      
    <Container maxWidth="md">
    <Map
        mapboxAccessToken="pk.eyJ1Ijoiam9obnJlZDE0MyIsImEiOiJjbDd6eHpzejMwMHZ1NDF0OXNhenZ5Z2ZxIn0.nNF5rACu_UGIldnxJez_Ow"
        
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "15px",
          border: "1px solid red"
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </Container>
      
    </div>
  );
}

export default GPS2;
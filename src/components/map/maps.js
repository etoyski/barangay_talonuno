import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import {MapContainer as LeafletMap, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css"
import osm from "./osm-provider";

import L from "leaflet";
import cities from "./cities.json";
import useGeoLocation from './useGeoLocation';
import Swal from 'sweetalert2';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
//installed with peer deps
const markerIcon = new L.Icon({
    iconUrl: require("../../assets/location.png"),
    iconSize: [35,45],
    iconAnchor: [17,45],
    popupAnchor: [0, -46],
//iconAnchor:[15,45]
});
const GPS = () => {
    const [center, setCenter] = useState({ lat:14.4445, lng: 120.9939 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const [userLoc, setuserLoc] =useState("");
    const location = useGeoLocation();
    const axios = require("axios");
    //const lat = location.coordinates.lat
    //const lng = location.coordinates.lng
     const [lat,setLat]= useState([location.coordinates.lat]);
     const [lng,setLng]= useState([location.coordinates.lat]);
const options = {
  method: 'GET',
  url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
  params: {location: `${[location.coordinates.lat, location.coordinates.lng]}`, language: 'en'},
  headers: {
    'X-RapidAPI-Key': '144c2c4729mshf9d8eac19730591p1ce751jsn00f27a0c1e16',
    'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.results[0]);
    setuserLoc(response.data.results[0].address);
    localStorage.setItem('gps', response.data.results[0].address)
}).catch(function (error) {
	console.error(error);
});

//    useEffect(() => {
//         if (location.loaded && !location.error){
//             mapRef.current.leafletElement.flyTo(
//                 [location.coordinates.lat,location.coordinates.lng],
//                  ZOOM_LEVEL, 
//                  {animate: true}
//                  );
//         }else{
//             mapRef.current.leafletElement.flyTo(
//                 [location.coordinates.lat,location.coordinates.lng],
//                  ZOOM_LEVEL, 
//                  {animate: true}
//                  );
//         }
//     },[]);
    return(
        <>
        <Container maxWidth="lg">
            <MapContainer
            center = {center}
            zoom = {ZOOM_LEVEL}
            ref = { mapRef }
            >
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
            
            {/* {cities.map( (city,idx) => 
            <Marker 
            position={[city.lat, city.lng ]} 
            icon={markerIcon} 
            key = {idx}
            >
                <Popup>
                    <b>{city.city}, {city.country}</b>
                </Popup>
            </Marker>)}; */}
            
            {location.loaded && !location.error && 
            (
                
                <Marker 
                icon={markerIcon}
                position={[location.coordinates.lat, location.coordinates.lng]}
                >
                    
                     <Popup>
                     <b> {userLoc}</b>
                     
                </Popup>
                </Marker>
            ) }
        
            </MapContainer>
            {/* <Button onClick={showMyLocation}> Get Location</Button> */}
        </Container>
        <Container maxWidth="md">
            <Box>
               
            </Box>
        </Container>
        </>
    )
}

export default GPS
import { Container } from "@mantine/core";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import classes from "./Map.module.css";

const Map = () => {
  return (
    <Container className={classes.container}>
      <MapContainer
        className={classes.mapContainer}
        center={[51.505, -0.09]}
        zoom={14}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>City Name</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;

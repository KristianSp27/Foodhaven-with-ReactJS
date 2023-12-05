import React, { useState, useEffect } from "react";
import classes from "./map.module.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { toast } from "react-toastify";

export default function Map({ readOnly, location, onChange }) {
  return (
    <div className={classes.container}>
      <MapContainer
        className={classes.map}
        center={[0, 0]}
        zoom={1}
        dragging={!readOnly}
        touchZoom={!readOnly}
        doubleClickZoom={!readOnly}
        scrollWheelZoom={!readOnly}
        boxZoom={!readOnly}
        keyboard={!readOnly}
        attributionControl={!readOnly}
      ></MapContainer>
    </div>
  );
}

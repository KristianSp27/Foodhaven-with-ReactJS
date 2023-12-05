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
      >
        <TileLayer url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

function FindButtonAndMarker({ readOnly, location, onChange }) {
  const [position, setPosition] = useState(location);

  const map = useMapEvents({
    click(e) {
      !readOnly && setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 13);
    },
    locationerror(e) {
      toast.error(e.message);
    },
  });
  return (
    <>
      {!readOnly && (
        <button type="button" className={classes.find_location} onClick={() => map.locate()}>
          Find my location
        </button>
      )}

      {position && (
        <Marker
          eventHandlers={{
            dragend: (e) => {
              setPosition(e.target.getLatLng());
            },
          }}
          position={position}
          draggable={!readOnly}
        >
          <Popup>Shipping location</Popup>
        </Marker>
      )}
    </>
  );
}

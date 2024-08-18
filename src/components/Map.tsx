"use client";

import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Container } from "@/components/Container";
import { useIsMobile } from "@/hooks/useIsMobile";

// const containerStyle = {
//   width: "400px",
//   height: "325px",
// };

const locations = [
  {
    title: "Planta Avellaneda",
    position: { lat: -34.6083, lng: -58.4365 },
  },
  {
    title: "Planta Florencio Varela",
    position: { lat: -34.7577, lng: -58.2756 },
  },
  {
    title: "Depósito",
    position: { lat: -34.5915, lng: -58.4202 },
  },
];

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isMobile } = useIsMobile();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY!,
  });

  const containerStyle = {
    width: isMobile ? "300px" : "400px",
    height: isMobile ? "225px" : "325px",
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <h2 className="maps__heading">
        Our Production Facilities Are located At{" "}
      </h2>
      <div className="maps__layout">
        {locations.map((location, index) => (
          <div key={index}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location.position}
              zoom={10}
            >
              <MarkerF position={location.position} />
              <InfoWindowF position={location.position}>
                <div>{location.title}</div>
              </InfoWindowF>
            </GoogleMap>
          </div>
        ))}
      </div>
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);

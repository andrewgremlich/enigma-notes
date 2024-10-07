import "leaflet/dist/leaflet.css";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useGeolocation } from "rooks";
import Link from "next/link";

export default function MapLocation() {
  const geoObj = useGeolocation();

  return (
    <div className="h-40">
      <h2>Map</h2>
      {geoObj?.isError && (
        <>
          <p>Geolocation isn't enabled</p>
          <Link href="/settings#map-location-settings">
            Go to settings and activate?
          </Link>
        </>
      )}
      {geoObj?.lat && geoObj?.lng && (
        <MapContainer
          center={[geoObj.lat, geoObj.lng]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[geoObj.lat, geoObj.lng]}
            icon={
              new Icon({
                iconUrl: markerIconPng as unknown as string,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

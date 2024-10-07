import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getAppData } from "@/db/appData";
import { PrimaryButton } from "../Style";

export const MapLocationSettings = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["get", "mapLocation"],
    queryFn: async () => {
      const mapLocation = await getAppData("mapLocation");
      return mapLocation?.value ?? false;
    },
  });
  const [mapLocation, setMapLocation] = useState<{ lat: string; long: string }>(
    {
      lat: "",
      long: "",
    },
  );

  return (
    <div id="map-location-settings">
      <h2>Map Location</h2>

      <p>Give permission to record map location of note?</p>

      <p>Map locations are only secured in your notes.</p>

      <p>Location is {isLoading && !data ? "not set" : "set"}</p>

      {mapLocation.lat && mapLocation.long && (
        <p>
          Latitude is {mapLocation.lat} and longitude is {mapLocation.long}
        </p>
      )}

      <PrimaryButton
        onClick={() => {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Latitude is", latitude);
            console.log("Longitude is", longitude);

            setMapLocation({
              lat: latitude.toFixed(8),
              long: longitude.toFixed(8),
            });
          });
        }}
      >
        Refresh Location
      </PrimaryButton>
    </div>
  );
};

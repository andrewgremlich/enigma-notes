import { useGeolocation } from "rooks";

import { GeolocationMessage } from "../GeolocationMessage";

export const Weather = () => {
  const geoObj = useGeolocation();

  return (
    <div>
      <h2>Weather</h2>
      <GeolocationMessage />
    </div>
  );
};

import { useEffect, useState } from "react";
import { getMoonIllumination, getTimes, type GetTimesResult } from "suncalc";
import { useGeolocation } from "rooks";

import { GeolocationMessage } from "../GeolocationMessage";

export const Astronomy = () => {
  const geoObj = useGeolocation();
  const [solarTimes, setSolarTimes] = useState<GetTimesResult | null>(null);
  const moonIllumination = getMoonIllumination(new Date());

  useEffect(() => {
    if (geoObj?.lat && geoObj?.lng) {
      const times = getTimes(new Date(), geoObj?.lat, geoObj?.lng);
      setSolarTimes(times);
    }
  }, [geoObj?.lat, geoObj?.lng]);

  return (
    <div>
      <h2>Astronomy</h2>
      <GeolocationMessage />
      {solarTimes && (
        <div>
          <p>Sunrise is at {solarTimes.sunrise.toTimeString()}</p>
          <p>Sunset is at {solarTimes.sunset.toTimeString()}</p>
        </div>
      )}
      {moonIllumination.fraction > 0.5 ? (
        <p>The moon is more than half full</p>
      ) : (
        <p>The moon is less than half full</p>
      )}
    </div>
  );
};

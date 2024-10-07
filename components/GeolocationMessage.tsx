import Link from "next/link";
import { useGeolocation } from "rooks";

export const GeolocationMessage = () => {
  const geoObj = useGeolocation();

  return (
    geoObj?.isError && (
      <>
        <p>Geolocation isn't enabled</p>
        <Link href="/settings#map-location-settings">
          Go to settings and activate?
        </Link>
      </>
    )
  );
};

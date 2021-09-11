import {
  FC,
  Fragment,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import { isMobile } from "react-device-detect";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import SearchBar from "./components/searchInput/searchInput";
import "./App.css";
import Loading from "./components/loading/loading";
import Error from "./components/error/error";

interface TMarker {
  long: number;
  lat: number;
}

interface TMapRef {
  panTo: Function;
  setZoom: Function;
}

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultProps = {
  center: {
    lat: isMobile ? 41.95006417653779 : 41.326437083885936,
    lng: isMobile ? -3.419972613508702 : -12.383096850269428,
  },
  zoom: isMobile ? 5 : 6,
};

const options = {
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const libraries: "places"[] = ["places"];

const App: FC = (): ReactElement => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY || "",
    libraries,
  });
  const [markers, setMarkers] = useState<TMarker[]>([]);
  const mapRef = useRef<TMapRef>();
  const onLoadMap = useCallback((map) => (mapRef.current = map), []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current?.panTo({ lat, lng });
    mapRef.current?.setZoom(11);
    setMarkers((markers) => [
      ...markers,
      {
        lat: lat,
        long: lng,
      },
    ]);
  }, []);

  if (loadError) return <Error />;
  if (!isLoaded) return <Loading />;

  return (
    <Fragment>
      <SearchBar panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        options={options}
        onLoad={onLoadMap}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.long }}
            icon={{
              url: "/pin.png",
              scaledSize: new window.google.maps.Size(33, 50),
            }}
          />
        ))}
      </GoogleMap>
    </Fragment>
  );
};

export default App;

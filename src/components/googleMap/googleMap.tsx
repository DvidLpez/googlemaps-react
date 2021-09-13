import {
  FC,
  Fragment,
  ReactElement,
  useCallback,
  useRef,
  useState
} from "react";
import { isMobile } from "react-device-detect";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import SearchBar from "../searchInput/searchInput";
import Loading from "../loading/loading";
import Error from "../error/error";
import { useSelector } from "react-redux";
import { IMapRef, IMarker, IReduxState } from "../../interfaces";
import InfoBox from "../infoBox/InfoBox";

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

const GoogleMapApp: FC = (): ReactElement => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY || "",
    libraries,
  });

  const markers  = useSelector((state:IReduxState) => state.data.markers);
  const [selectedMarker, setSelectedMarker] = useState<IMarker>();
  
  const mapRef = useRef<IMapRef>();
  const onLoadMap = useCallback((map) => (mapRef.current = map), []);

  const goToMap = useCallback(({lat, lng}) => {
    mapRef.current?.panTo({ lat, lng });
    mapRef.current?.setZoom(11);
  }, []);

  if (loadError) return <Error text="Upps! Error de conexión, prueba más tarde..." />;
  if (!isLoaded) return <Loading text="Cargando google maps..." />;

  return (
    <Fragment>
      <SearchBar goToMap={goToMap} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        options={options}
        onLoad={onLoadMap}
      >
        { markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ 
              lat: marker.location.lat, 
              lng: marker.location.lng 
            }}
            icon={{
              url: "/pin.png",
              scaledSize: new window.google.maps.Size(33, 50),
            }}
            onClick={ ()=> setSelectedMarker(marker)}
          />
        ))}

        {
          selectedMarker && (
            <InfoWindow
              position={{
                lat: selectedMarker.location.lat,
                lng: selectedMarker.location.lng
              }}
              onCloseClick={() => setSelectedMarker(undefined)}
            >
              <InfoBox marker={selectedMarker} />
            </InfoWindow>
          )
        }
      </GoogleMap>
    </Fragment>
  );
};

export default GoogleMapApp;

import './App.css';

import { FC, Fragment, ReactElement } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '100vh'
};

const defaultProps = {
  center: {
    lat: 41.426437083885936,
    lng: -15.383096850269428
  },
  zoom: 6
};

const options = {
  zoomControl: false,
}

const libraries: ('places')[] = ['places'];

const App: FC = (): ReactElement => {

  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY || '',
    libraries,
  })

  if(loadError) return <p>"Error loading maps"</p>;
  if (!isLoaded) return <p>"Cargando mapas"</p>;


  return (
  <Fragment>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          options={options}
        >
        </GoogleMap>
      </Fragment>
  );
}

export default App;

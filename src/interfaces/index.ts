export interface IMarker {
  displayName: string;
  location: {
    lat: number;
    lng: number;
  }
  city: google.maps.GeocoderAddressComponent;
  region: google.maps.GeocoderAddressComponent;
  province: google.maps.GeocoderAddressComponent;
  country: google.maps.GeocoderAddressComponent;
}

export interface IMapRef {
  panTo: Function;
  setZoom: Function;
}

export interface TSearch {
  goToMap: Function;
}

export interface IReduxState {
  data: {
    markers: Array<IMarker>
  }
}

export interface IMarkerState {
  markers: Array<IMarker>;
}

export interface IDispatchProps {
  type: string;
}

export interface IPayload {
  marker: IMarker;
}

export interface IAction {
  type: string;
  payload: {
    marker: IMarker
  }
}

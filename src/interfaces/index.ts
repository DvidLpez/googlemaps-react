export interface IMarker {
  displayName: string;
  location: {
    lat: number;
    lng: number;
  }
  country?: string;
  area_level_1?: string;
  area_level_2?: string;
  area_level_3?: string;
  area_level_4?: string;
  locality?: string;
  postal_code?: string;
  route?: string;
  street_number?: string;
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

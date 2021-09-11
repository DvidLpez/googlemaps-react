import { MARKER_OK } from '../types';
import { IAction, IMarkerState } from '../../interfaces/index';

const initialState: IMarkerState = {
  markers: []
};

const markerReducer = (state = initialState, action: IAction): IMarkerState => {
  switch (action.type) {
    case MARKER_OK:
      return {
        ...state,
        markers: [...state.markers, action.payload.marker]
      };  
    default:
      return state;
  }
};

export default markerReducer;

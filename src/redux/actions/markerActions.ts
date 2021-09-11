import { Dispatch } from "react";
import { IMarker, IDispatchProps, IPayload } from "../../interfaces";
import { MARKER_OK } from "../types";

/**
 * @param ubication - ubication to save
 */
export const setMarketToRedux = (ubication: IMarker) => {
   return async (dispatch: Dispatch<IDispatchProps>): Promise<void> => {
      try {
         dispatch(
           launchDispatch(MARKER_OK, {
            marker: ubication
           })
         );
      } catch (error) {
         console.log(error);
      }
   };
};
const launchDispatch = (type: string, payload: IPayload) => ({ type, payload });

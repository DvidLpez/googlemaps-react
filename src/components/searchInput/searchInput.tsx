import { FC, ReactElement } from "react";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
   InputSearchStyled,
   SuggestionsStyled,
   WrapperSearchStyled,
   SelectorStyled,
   ComboboxStyled,
} from "./searchInput.style";
import { useDispatch, useSelector } from "react-redux";
import { setMarketToRedux } from "../../redux/actions/markerActions";
import { parserMarker } from "../../parsers/marker";
import { IMarker, IReduxState, TSearch } from "../../interfaces";

const SearchBar: FC<TSearch> = ({ goToMap }): ReactElement => {
   const {
      ready,
      setValue,
      value,
      suggestions: { status, data },
      clearSuggestions,
   } = usePlacesAutocomplete({
      cache: 24 * 60 * 60,
      requestOptions: {
         location: new google.maps.LatLng(41.95006417653779, -3.419972613508702),
         radius: 500 * 1000,
      },
      debounce: 400,
   });
   const dispatch = useDispatch();
   const markers  = useSelector((state:IReduxState) => state.data.markers);

   const setToLocalStorage = (ubication: IMarker) => {
      const data = localStorage.getItem("markers_storage");
      const localMarkers = data ? JSON.parse(data) : [];
      localMarkers.push(ubication);
      localStorage.setItem("markers_storage",JSON.stringify(localMarkers));
    };

   const checkMarkerInRedux = (ubication: IMarker) => {
      let isUbicationInRedux = false;
      markers.forEach(element => {
         if(element.location.lat === ubication.location.lat && 
            element.location.lng === ubication.location.lng
         )
            isUbicationInRedux = true;
      });
      if(!isUbicationInRedux) {
         dispatch(setMarketToRedux(ubication));
         setToLocalStorage(ubication);
      }  
   }

   const selectedPlace = async (address: string) => {
      setValue(address, false);
      clearSuggestions();
      try {
         const results = await getGeocode({ address });
         const marker = parserMarker(results[0]);
         const { lat, lng } = marker.location;
         goToMap({ lat, lng });
         checkMarkerInRedux(marker);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <WrapperSearchStyled>
         <ComboboxStyled onSelect={selectedPlace}>
            <FontAwesomeIcon icon={faSearch} className="icon_search" />
            <InputSearchStyled
               value={value}
               onChange={(e) => setValue(e.target.value)}
               disabled={!ready}
               placeholder="Search Places"
            ></InputSearchStyled>
            <SelectorStyled>
               {status === "OK" &&
                  data.map(({ description }, index) => (
                     <SuggestionsStyled key={index} value={description} />
                  ))}
            </SelectorStyled>
         </ComboboxStyled>
      </WrapperSearchStyled>
   );
};

export default SearchBar;

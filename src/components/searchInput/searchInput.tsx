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
import { useDispatch } from "react-redux";
import { setMarketToRedux } from "../../redux/actions/markerActions";
import { parserMarker } from "../../parsers/marker";
import { TSearch } from "../../interfaces";

const SearchBar: FC<TSearch> = ({ goToMap }): ReactElement => {
   const {
      ready,
      setValue,
      value,
      suggestions: { status, data },
      clearSuggestions,
   } = usePlacesAutocomplete({
      requestOptions: {
         location: new google.maps.LatLng(41.95006417653779, -3.419972613508702),
         radius: 500 * 1000,
      },
      debounce: 400,
   });
   const dispatch = useDispatch();

   const selectedPlace = async (address: string) => {
      setValue(address, false);
      clearSuggestions();
      try {
         const results = await getGeocode({ address });
         const marker = parserMarker(results[0]);
         const { lat, lng } = marker.location;
         goToMap({ lat, lng });
         dispatch(setMarketToRedux(marker));
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

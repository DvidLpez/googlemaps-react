import { FC, ReactElement } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  InputSearchStyled,
  SuggestionsStyled,
  WrapperSearchStyled,
  SelectorStyled,
  ComboboxStyled,
} from "./searchInput.style";

interface TSearch {
  panTo: Function;
}
const SearchBar: FC<TSearch> = ({ panTo }): ReactElement => {
  const {
    ready,
    setValue,
    value,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new google.maps.LatLng(-34.397, 150.644),
      radius: 100 * 1000,
    },
    debounce: 400,
  });

  const selectedPlace = async(address: string) => {
   setValue(address, false);
   clearSuggestions();
   try {
     const results = await getGeocode({ address });
     const { lat, lng } = await getLatLng(results[0]);
     panTo({ lat, lng });
   } catch (error) {
     console.log(error);
   }
 }

  return (
    <WrapperSearchStyled>
      <ComboboxStyled
        onSelect={selectedPlace}
      >
        <FontAwesomeIcon icon={faSearch} className="icon_search" />
        <InputSearchStyled
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Search Places"
        ></InputSearchStyled>
        <SelectorStyled>
          {status == "OK" &&
            data.map(({ description }, index) => (
              <SuggestionsStyled key={index} value={description} />
            ))}
        </SelectorStyled>
      </ComboboxStyled>
    </WrapperSearchStyled>
  );
};
export default SearchBar;

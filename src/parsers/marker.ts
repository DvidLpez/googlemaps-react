import { IMarker } from "../interfaces";

export function parserMarker(address:google.maps.GeocoderResult) {

  const addressClear: IMarker = {
    "displayName": address.formatted_address || '',
    "location": {
      "lat": address.geometry.location.lat(),
      "lng": address.geometry.location.lng()
    }
  }
  address.address_components.forEach(element => {
    const key = element.types[0],
    value = element.long_name;
    switch (key) {
      case 'country':
        addressClear.country = value || ''; 
        break;
      case 'administrative_area_level_1':
        addressClear.area_level_1 = value || ''; 
        break;
      case 'administrative_area_level_2':
        addressClear.area_level_2 = value || ''; 
        break;
      case 'administrative_area_level_3':
        addressClear.area_level_3 = value || ''; 
        break;
      case 'administrative_area_level_4':
        addressClear.area_level_4= value || ''; 
        break;
      case 'locality':
        addressClear.locality = value || ''; 
        break;
      case 'postal_code':
        addressClear.postal_code = value || ''; 
        break;
      case 'route':
        addressClear.route = value || ''; 
        break;
      case 'street_number':
        addressClear.street_number = value || ''; 
        break;
      default:
        break;
    }
  });      
  return addressClear;
}

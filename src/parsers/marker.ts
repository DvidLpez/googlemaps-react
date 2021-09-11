
export function parserMarker(address:google.maps.GeocoderResult) {
  return {
    'country': address.address_components[3] || '',
    'province': address.address_components[2] || '',
    'region': address.address_components[1] || '',
    'city': address.address_components[0] || '',
    'displayName': address.formatted_address || '',
    'location': {
      'lat': address.geometry.location.lat(),
      'lng': address.geometry.location.lng(),
    }
  }
}
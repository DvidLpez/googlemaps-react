import { render, screen } from '@testing-library/react';
import InfoBox from './infoBox';

const mockMarker = {
  displayName:"Avinguda Diagonal, 643, 08028 Barcelona, España",
  location: {
    lat:41.3855551,
    lng:2.1198169
  },
  street_number:"643",
  route:"Avinguda Diagonal",
  locality:"Barcelona",
  area_level_2:"Barcelona",
  area_level_1:"Catalunya",
  country:"España",
  postal_code:"08028"
};

describe('Test InfoBox Component', () => {
  it('renders infoBox component', () => {
    render( <InfoBox marker={mockMarker} /> );

    expect(screen.getByRole('heading', { level:4 })).toHaveTextContent(mockMarker.displayName);
    expect(screen.getByText(`País: ${mockMarker.country}`)).toBeInTheDocument();
    expect(screen.getByText(`Región: ${mockMarker.area_level_1}`)).toBeInTheDocument();
    expect(screen.getByText(`Provincia: ${mockMarker.area_level_2}`)).toBeInTheDocument();
    expect(screen.getByText(`Localidad: ${mockMarker.locality}`)).toBeInTheDocument();
    expect(screen.getByText(`Código postal: ${mockMarker.postal_code}`)).toBeInTheDocument();  
    expect(screen.getByText(`Ubicación: ${mockMarker.route}`)).toBeInTheDocument();
    expect(screen.getByText(`Número: ${mockMarker.street_number}`)).toBeInTheDocument();
  });
})

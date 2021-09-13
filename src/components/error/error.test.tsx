import { render, screen } from '@testing-library/react';
import Error from './error';

const mockText = "Error ocurred";

describe('Test Error Component', () => {
  it('renders error component', () => {
    render(<Error text={mockText}/>);

    expect(screen.getByTestId('error-icon-test')).toHaveClass('fa-bomb');
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
})

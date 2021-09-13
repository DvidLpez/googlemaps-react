import { render, screen } from '@testing-library/react';
import Loading from './loading';

const mockText = "Loading...";

describe('Test Loading Component', () => {
  it('renders loading component', () => {
    render(<Loading text={mockText}/>)

    expect(screen.getByTestId('loading-icon-test')).toHaveClass('fa-spinner');
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
})

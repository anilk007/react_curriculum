import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

import '@testing-library/jest-dom';


describe('Greeting Component', () => {
  test('renders greeting with provided name', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
    
  });

  test('renders default greeting when no name is provided', () => {
    render(<Greeting />);
    expect(screen.getByText(/Hello, Guest!/i)).toBeInTheDocument();
  });
});

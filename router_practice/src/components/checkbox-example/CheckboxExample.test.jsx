import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxExample from './CheckboxExample';

describe('CheckboxExample Component', () => {
  test('toggles checkbox and displays confirmation message', () => {
    render(<CheckboxExample />);
    
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Accept Terms & Conditions');

    // Ensure checkbox is initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText('You have accepted the terms.')).toBeInTheDocument();

    // Click to uncheck the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.queryByText('You have accepted the terms.')).not.toBeInTheDocument();
  });
});
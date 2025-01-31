import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  test('renders user details when user data is provided', () => {
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
    
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('John Doe');
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  test('renders fallback message when no user data is provided', () => {
    render(<UserProfile user={null} />);
    
    expect(screen.getByText('No user data available')).toBeInTheDocument();
  });
});

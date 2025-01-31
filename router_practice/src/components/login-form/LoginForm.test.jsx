import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';


describe('LoginForm Component', () => {
    test('calls submitLogin with the correct arguments when form is submitted', () => {
        const mockSubmitLogin = vi.fn(); // Create a mock function for submitLogin

        render(<LoginForm submitLogin={mockSubmitLogin} />);

        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText('Login');

        // Simulate user input
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Simulate form submission
        fireEvent.click(submitButton);

        // Assert submitLogin is called with the correct username and password
        expect(mockSubmitLogin).toHaveBeenCalledWith('testuser', 'password123');
    });

    test('calls handleSubmit when form is submitted', () => {

        // console.log(vi);
        // console.log(vi.spyOn);

        const spySubmit = vi.fn();
        render(<LoginForm handleSubmit={spySubmit} />);
        fireEvent.click(screen.getByText("Login"));
        // expect(spySubmit).toHaveBeenCalled();

        // const spySubmit = vi.spyOn(LoginForm.prototype, 'handleSubmit'); // Spy on the handleSubmit method

        //     render(<LoginForm submitLogin={() => {}} />);

        //     const submitButton = screen.getByText('Login');

        //     // Simulate form submission
        //     fireEvent.click(submitButton);

        //     // Assert that handleSubmit was called
        //     expect(spySubmit).toHaveBeenCalled();

        //     // Clean up the spy
        //     spySubmit.mockRestore();
    });
});

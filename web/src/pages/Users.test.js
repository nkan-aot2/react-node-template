import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Users from './Users';
import userService from '../services/userService';

jest.mock('../services/userService'); // Mock the userService module

describe('Users Page', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test 
  });

  test('renders Users page with form fields', () => {
    render(<Users />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Middle Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save User/i })).toBeInTheDocument();
  });

  test('displays success message on form submission', async () => {
    userService.saveUser.mockResolvedValueOnce({ message: 'User saved successfully!' });

    render(<Users />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: '1990-01-01' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Save User/i }));

    // Check for success message
    expect(await screen.findByText(/User saved successfully!/i)).toBeInTheDocument();
  });

  test('displays error message on form submission failure', async () => {
    userService.saveUser.mockRejectedValueOnce(new Error('Error saving user.'));

    render(<Users />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: '1985-05-15' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Save User/i }));

    // Check for error message
    expect(await screen.findByText(/Error saving user./i)).toBeInTheDocument();
  });
});

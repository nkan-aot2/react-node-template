import { render, screen, fireEvent } from '@testing-library/react';
import { vi, type Mock, beforeEach, describe, test, expect } from 'vitest';
import Users from './Users';
import userService from '../services/userService';

vi.mock('../services/userService'); // Mock the userService module

describe('Users Page', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test 
  });

  test('renders Users page with form fields', () => {
    render(<Users />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/First Name/i)).to.exist;
    expect(screen.getByLabelText(/Middle Name/i)).to.exist;
    expect(screen.getByLabelText(/Last Name/i)).to.exist;
    expect(screen.getByLabelText(/Date of Birth/i)).to.exist;
    expect(screen.getByRole('button', { name: /Save User/i })).to.exist;
  });

  test('displays success message on form submission', async () => {
    (userService.saveUser as Mock).mockResolvedValueOnce({ message: 'User saved successfully!' });

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
    expect(await screen.findByText(/User saved successfully!/i)).to.exist;
  });

  test('displays error message on form submission failure', async () => {
    (userService.saveUser as Mock).mockRejectedValueOnce(new Error('Error saving user.'));

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
    expect(await screen.findByText(/Error saving user./i)).to.exist;
  });
});

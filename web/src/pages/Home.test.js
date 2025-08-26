import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
    const { getByText } = render(<Home />);
    const welcomeMessage = getByText(/Welcome to the React Starter App/i);
    expect(welcomeMessage).toBeInTheDocument();
});

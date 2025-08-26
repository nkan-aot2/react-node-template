import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Navigation from './Navigation';

test('renders navigation links', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );

    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Users/i)).toBeInTheDocument();
});

import React from 'react';
import { screen } from '@testing-library/react';
import Header from '..';

describe('<Header />', () => {
    global.fetch = jest.fn().mockImplementation(() => ({
        json: () => ({
            name: 'OleG',
        }),
    }));
    it('render Header component', async () => {
        const { findByText } = render(<Header />);
        expect(await findByText(/OleG/)).toBeInTheDocument();
    });
});

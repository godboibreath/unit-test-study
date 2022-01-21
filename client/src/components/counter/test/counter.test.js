import React from 'react';
import Counter from '..';
import { screen } from '@testing-library/react';

describe('<Counter />', () => {
    beforeAll(() => {
        global.fetch = jest.fn().mockImplementation(() => ({
            json: () => ({
                data: [1, 2, 3, 4, 5],
                login: true,
                name: 'OleG',
            }),
        }));
        global.WebSocket.event = {
            data: JSON.stringify({
                value: 58,
            }),
        };
    });
    // it('render component', () => {
    //     const { findByTestId, getAllByRole, queryByTestId } = render(<Counter />);
    //     expect(getAllByRole('button')[2]).toBeInTheDocument();
    //     expect(queryByTestId('random')).toBeInTheDocument();
    // });

    it('should have logged', async () => {
        const { queryByText, findByText } = render(<Counter />);
        expect(queryByText(/logged/i)).toBeNull();
        expect(await findByText(/logged/i)).toBeInTheDocument();
        screen.debug();
    });

    // it('should have logged', async () => {
    //     const { getByText, findByText } = render(<Counter />);
    //     expect(getByText(/0%/i)).toBeInTheDocument();
    //     screen.debug();
    //     expect(await screen.findByText('58%')).toBeInTheDocument();
    // });

    afterAll(() => {
        global.fetch = undefined;
        global.WebSocket.event = {};
    });
});

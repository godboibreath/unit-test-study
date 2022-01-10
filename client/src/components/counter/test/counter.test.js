import React from 'react';
import Counter from '..';

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
            value: 58,
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
    });

    afterAll(() => {
        global.fetch = undefined;
        global.WebSocket.event = {};
    });
});

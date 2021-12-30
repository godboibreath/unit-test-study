import React from 'react';
import Counter from '..';

describe('<Counter />', () => {
    global.fetch = jest.fn().mockImplementation(() => ({
        json: () => ({
            data: [1, 2, 3, 4, 5],
            login: true,
        }),
    }));
    it('render component', async () => {
        const { findByTestId, getAllByRole, queryByTestId } = render(<Counter />);
        expect(getAllByRole('button')[2]).toBeInTheDocument();
        expect(queryByTestId('random')).toBeNull();
    });

    it('should have logged', async () => {
        const { queryByText, findByText } = render(<Counter />);
        expect(queryByText(/logged/i)).toBeNull();
        expect(await findByText(/logged/i)).toBeInTheDocument();
    });
});

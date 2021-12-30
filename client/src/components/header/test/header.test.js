import React from 'react';
import { screen } from '@testing-library/react';
import Header from '..';

describe('<Header />', () => {
    it('render Header component', () => {
        render(<Header />);
    });
});

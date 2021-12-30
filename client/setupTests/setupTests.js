import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../src/store';

global.render = (component) => render(<Provider store={store}>{component}</Provider>);


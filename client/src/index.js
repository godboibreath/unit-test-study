import React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/counter';

import store from './store';

import './styles/index.scss';

export default () => (
    <Provider store={store}>
        <Counter />
    </Provider>
)
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { StudentRegistration } from '.';
import { store } from '../../../init';

test('should render without errors', () => {
    const div = document.createElement('div');
    render(
        <Provider store = { store }>
            <StudentRegistration />
        </Provider>,
        div,
    );
    unmountComponentAtNode(div);
});

/**
 * @jest-environment jsdom
 */

// Reducer
import { togglersReducer as togglers } from '../togglers';

// Actions
import { togglerCreatorAction } from '../togglers';

describe('togglers actions', () => {
    test('should handle set toggler action', () => {
        expect(togglers(void 0, togglerCreatorAction({ type: 'isOnline', value: false }))).toMatchSnapshot();
    });
});

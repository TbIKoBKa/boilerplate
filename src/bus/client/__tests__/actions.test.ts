/**
 * @jest-environment jsdom
 */

// Actions
import { togglerCreatorAction } from '../togglers';

describe('togglers actions', () => {
    test('should set toggler', () => {
        expect(togglerCreatorAction({ type: 'isOnline', value: false })).toMatchSnapshot();
    });
});

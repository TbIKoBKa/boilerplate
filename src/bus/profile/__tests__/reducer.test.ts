// Reducer
import { profileReducer as profile } from '../reducer';

// Actions
import { fillProfileAction } from '../actions';

// Types
import { Profile } from '../types';

const testProfile: Profile = {
    firstName:  'Naruto',
    surname:    'Uzumaki',
    age:        18,
    email:      'narutolovesukraine@gmail.com',
    sex:        'male',
    speciality: 'Genin',
};

describe('profile reducer', () => {
    test('should handle fill action', () => {
        expect(profile(void 0, fillProfileAction(testProfile))).toMatchSnapshot();
    });
});

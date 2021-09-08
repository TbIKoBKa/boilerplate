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

describe('profile actions', () => {
    test('should fill profile', () => {
        expect(fillProfileAction(testProfile)).toMatchSnapshot();
    });
});

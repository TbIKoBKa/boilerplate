// Reducer
import { usersReducer as users } from '../reducer';

// Actions
import { setUsersAction } from '../actions';

// Types
import { TUsers } from '../types';

const testUsers: TUsers = [
    {
        id:      0,
        avatar:  'avatar',
        address: {
            city:        'city',
            coordinates: {
                lat: 0,
                lng: 0,
            },
            country:        'country',
            state:          'state',
            street_address: 'street address',
            street_name:    'street name',
            zip_code:       'zip',
        },
        credit_card: {
            cc_number: 'number',
        },
        date_of_birth: 'data',
        email:         'email',
        employment:    {
            key_skill: '0',
            title:     'title',
        },
        first_name:              'fname',
        gender:                  'gender',
        last_name:               'lname',
        password:                'password',
        phone_number:            'phone',
        social_insurance_number: 'sin',
        subscription:            {
            payment_method: 'method',
            plan:           'plan',
            status:         'status',
            term:           'term',
        },
        uid:      'uid',
        username: 'username',
    },
];

describe('users reducer', () => {
    test('should handle set action', () => {
        expect(users(void 0, setUsersAction(testUsers))).toMatchSnapshot();
    });
});

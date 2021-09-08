// Actions
import { setPeopleAction } from '../actions';
import { fetchPeopleActionAsync } from '../thunk/actions';

// Types
import { People } from '../types';

const testPeople: People = [
    {
        name:       'Naruto',
        birth_year: '2002',
        created:    '2021',
        edited:     '2021',
        eye_color:  'blue',
        films:      [ 'Naruto', 'Boruto' ],
        gender:     'male',
        hair_color: 'yellow',
        height:     '176',
        homeworld:  'Ukraine',
        mass:       '73',
        skin_color: 'white',
        species:    [ 'species' ],
        starships:  [ 'Saske' ],
        url:        'kanoha.ua/users/narotuuzumaki',
        vehicles:   [ 'Hinata' ],
    },
];

describe('people actions', () => {
    test('should set people', () => {
        expect(setPeopleAction(testPeople)).toMatchSnapshot();
    });
    test('should fetch people', () => {
        expect(fetchPeopleActionAsync()).toMatchSnapshot();
    });
});

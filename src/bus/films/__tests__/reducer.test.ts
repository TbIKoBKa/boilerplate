// Reducer
import { filmsReducer as films } from '../reducer';

// Actions
import { setFilmsAction } from '../actions';

// Types
import { Films } from '../types';

const testFilms: Films = [
    {
        title:         'Naruto',
        episode_id:    0,
        characters:    [ 'Naruto' ],
        created:       '2021',
        director:      'Naruto Uzumaki',
        edited:        '2021',
        opening_crawl: 'Best film',
        planets:       [ 'Kanoha' ],
        producer:      'Saske Uchiha',
        release_date:  '2021',
        species:       [ 'Something' ],
        starships:     [ 'Starship' ],
        url:           'naruto.watch.tv',
        vehicles:      [ 'Foots', 'Hands' ],
    },
];

describe('planets reducer', () => {
    test('should handle set action', () => {
        expect(films(void 0, setFilmsAction(testFilms))).toMatchSnapshot();
    });
});

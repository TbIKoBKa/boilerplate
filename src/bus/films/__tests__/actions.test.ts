// Actions
import { setFilmsAction } from '../actions';
import { fetchFilmsActionAsync } from '../thunk/actions';

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

describe('films actions', () => {
    test('should set films', () => {
        expect(setFilmsAction(testFilms)).toMatchSnapshot();
    });
    test('should fetch films', () => {
        expect(fetchFilmsActionAsync()).toMatchSnapshot();
    });
});

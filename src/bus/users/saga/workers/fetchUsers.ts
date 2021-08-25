import { TUsers } from '../../types';

import { setUsersAction } from '../../actions';

import * as API from '../api';

import { makeRequest } from '../../../../tools/helpers';

export function* fetchUsers() {
    yield makeRequest<TUsers>({
        fetcher:     API.fetchUsers,
        togglerType: 'isUsersFetching',
        fill:        setUsersAction,
    });
}

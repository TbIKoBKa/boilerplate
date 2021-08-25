// Core
import { SagaIterator } from '@redux-saga/types';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import { fetchUsers } from './workers';

function* watchFetchUsers(): SagaIterator {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers(): SagaIterator {
    yield all([ call(watchFetchUsers) ]);
}

// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchTodos } from '../../bus/todos/saga';
import { watchUsers } from '../../bus/users/saga';

export function* rootSaga() {
    yield all([ watchTodos(), watchUsers() ]);
}

// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { todosReducer as todos } from '../../bus/todos/reducer';
import { usersReducer as users } from '../../bus/users/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
    users,
});

export type AppState = ReturnType<typeof rootReducer>;

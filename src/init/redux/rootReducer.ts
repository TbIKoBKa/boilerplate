// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { todosReducer as todos } from '../../bus/todos/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { peopleReducer as people } from '../../bus/people/reducer';
import { filmsReducer as films } from '../../bus/films/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
    users,
    profile,
    people,
    films,
});

export type AppState = ReturnType<typeof rootReducer>;

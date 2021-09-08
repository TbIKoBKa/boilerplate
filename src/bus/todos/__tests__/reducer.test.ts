// Reducer
import { todosReducer as todos } from '../reducer';

// Actions
import {
    deleteTodoAction,
    setTodoAction,
    setTodosAction,
    updateTodoAction,
} from '../actions';

// Types
import { Todos } from '../types';

const testTodos: Todos = [
    {
        id:          '0',
        isCompleted: false,
        text:        'text',
    },
];

describe('todos reducer', () => {
    test('should handle delete todo action', () => {
        expect(todos(void 0, deleteTodoAction('0'))).toMatchSnapshot();
    });
    test('should handle set todo action', () => {
        expect(todos(void 0, setTodoAction(testTodos[ 0 ]))).toMatchSnapshot();
    });
    test('should handle set todos action', () => {
        expect(todos(void 0, setTodosAction(testTodos))).toMatchSnapshot();
    });
    test('should handle update todo action', () => {
        expect(todos(void 0, updateTodoAction(testTodos[ 0 ]))).toMatchSnapshot();
    });
});

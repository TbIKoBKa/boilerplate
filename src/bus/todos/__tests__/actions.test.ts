// Actions
import {
    deleteTodoAction,
    setTodoAction,
    setTodosAction,
    updateTodoAction,
} from '../actions';
import {
    createTodoActionAsync,
    deleteTodoActionAsync,
    fetchTodosActionAsync,
    updateTodoActionAsync,
} from '../saga/actions';

// Types
import { Todos } from '../types';

const testTodos: Todos = [
    {
        id:          '0',
        isCompleted: false,
        text:        'text',
    },
];

describe('todos actions', () => {
    test('should delete todo', () => {
        expect(deleteTodoAction('0')).toMatchSnapshot();
    });
    test('should set todo', () => {
        expect(setTodoAction(testTodos[ 0 ])).toMatchSnapshot();
    });
    test('should set todos', () => {
        expect(setTodosAction(testTodos)).toMatchSnapshot();
    });
    test('should update todo', () => {
        expect(updateTodoAction(testTodos[ 0 ])).toMatchSnapshot();
    });
    test('should create todo async', () => {
        expect(createTodoActionAsync({ body: { text: 'text' }})).toMatchSnapshot();
    });
    test('should delete todo async', () => {
        expect(deleteTodoActionAsync({ todoId: '0' })).toMatchSnapshot();
    });
    test('should fetch todos async', () => {
        expect(fetchTodosActionAsync()).toMatchSnapshot();
    });
    test('should update todo async', () => {
        expect(updateTodoActionAsync({ todoId: '0', body: { isCompleted: true }})).toMatchSnapshot();
    });
});

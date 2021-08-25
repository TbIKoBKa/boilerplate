// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useTodosQuery, useTodosMutations } from '../../../bus/todos';

// Redux
import { useTogglersRedux } from '../../../bus/client/togglers';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

//My Styled
import { AcceptButton, CancelButton } from '../../elements/Styled';
import { Link } from 'react-router-dom';

const Main: FC = () => {
    const [ text, setText ] = useState<string>('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();
    const { data, loading } = useTodosQuery();
    const { createTodo, updateTodo, deleteTodo } = useTodosMutations();

    if (loading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            createTodo({ body: { text }});
            setText('');
        }
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header ref = { headerRef }>
                <nav>
                    <Link to="/users">
                        <Button>
                            Users
                        </Button>
                    </Link>
                </nav>
                <input
                    value = { text }
                    onChange = { (event) => void setText(event.target.value) }
                />
                <nav>
                    <Button
                        disabled = { !isOnline }
                        title = 'Create TODO'
                        onClick = { onCreate }>
                        CREATE
                    </Button>
                </nav>
            </Header>
            <main>
                {
                    data.map((todo, index) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void deleteTodo({ todoId: todo.id }) }
                            updateHandler = { () => void updateTodo({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            }) }
                        />
                    ))
                }
            </main>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

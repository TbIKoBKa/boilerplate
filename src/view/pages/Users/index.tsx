// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Api
import { useUsersQuery } from '../../../bus/users';

// Elements
import { Spinner } from '../../elements';

//React-Dom
import { Link } from 'react-router-dom';

// Styles
import {
    Container,
    Header,
    Main,
    ActionButton,
    Table,
    TBody,
    TRow,
    THead,
    Th,
    Td,
    UserSection,
    Dl,
    Dt,
    Dd,
} from './styles';

// Types
import { TUser } from '../../../bus/users/types';

// Tools
import { formatText } from '../../../tools/helpers';

const Users: FC = () => {
    let { data, loading } = useUsersQuery();
    const [ user, setUser ] = useState<TUser | null>(null);
    const keys = [ 'first_name', 'last_name', 'email', 'date_of_birth' ];
    if (loading) {
        return <Spinner />;
    }

    const onSelect = (user: TUser) => {
        setUser(user);
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header>
                <ActionButton>Accept</ActionButton>
                <Link to = '/'>
                    <ActionButton actionBack>
                        Close
                    </ActionButton>
                </Link>
            </Header>
            <Main>
                <Table>
                    <THead>
                        <tr>
                            {
                                keys.map((item, index) => {
                                    let newItem = formatText(item);

                                    return <Th key = { index }>{newItem}</Th>;
                                })
                            }
                        </tr>
                    </THead>
                    <TBody>
                        {
                            data.map((user) => {
                                return (
                                    <TRow
                                        key = { user.id }
                                        onClick = { () => onSelect(user) }>
                                        {
                                            keys.map((item, index) => {
                                                return <Td key = { index }>{user[ item ]}</Td>;
                                            })
                                        }
                                    </TRow>
                                );
                            })
                        }
                    </TBody>
                </Table>
                {
                    user
                    && (
                        <UserSection>
                            <Dl>
                                <img
                                    height = '100'
                                    src = { user.avatar }
                                    width = '100'
                                />
                                {
                                    Object.entries(user).map((item, index) => {
                                        if (item[ 0 ] === 'avatar') {
                                            return null;
                                        } else if (typeof item[ 1 ] !== 'object') {
                                            return (
                                                <React.Fragment key = { index }>
                                                    <Dt>{`${formatText(item[ 0 ])}: `}</Dt>
                                                    <Dd>{item[ 1 ]}</Dd>
                                                </React.Fragment>
                                            );
                                        }

                                        return (
                                            <React.Fragment key = { index }>
                                                <dl>
                                                    <Dt key = { index }>{formatText(item[ 0 ])}:</Dt>
                                                    {
                                                        Object.entries(item[ 1 ]).map((item, index) => item[ 0 ] !== 'coordinates'
                                                                && <Dd key = { index }>{`${formatText(item[ 0 ])}: ${item[ 1 ]}`}</Dd>)
                                                    }
                                                </dl>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </Dl>
                        </UserSection>
                    )
                }
            </Main>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Users />
    </ErrorBoundary>
);

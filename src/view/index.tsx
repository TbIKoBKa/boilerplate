// Core
import React, { FC, useEffect, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

// Containers
import { Routes } from './routes';

// Components
import { Drawer, SpeedDial, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// Icons
import { Menu, InsertPhoto, WbSunny } from '@mui/icons-material';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
import { AppContainer } from './styles';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const [ dwawerVisible, setDrawerVisible ] = useState<boolean>(false);

    const pages = [
        { icon: <WbSunny />, name: 'Weather' },
        { icon: <InsertPhoto />, name: 'Photos' },
    ];

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
                <SpeedDial
                    ariaLabel = 'SpeedDial basic example'
                    direction = 'right'
                    icon = { <Menu /> }
                    sx = {{ position: 'absolute', top: 32, left: 32 }}
                    onClick = { () => setDrawerVisible(true) }>
                </SpeedDial>
                <Drawer
                    anchor = 'left'
                    open = { dwawerVisible }
                    onClose = { () => setDrawerVisible(false) }>
                    <List>
                        {pages.map((page) => (
                            <Link
                                key = { page.name }
                                to = { `/${page.name}` }>
                                <ListItem
                                    button
                                    key = { page.name }>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary = { page.name }/>
                                </ListItem>
                            </Link>
                            // <ListItem
                            //     button
                            //     key = { page.name }>
                            //     <ListItemIcon>
                            //         {page.icon}
                            //     </ListItemIcon>
                            //     <Link to = { `/${page.name}` }>{page.name}</Link>
                            // </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppContainer>
        </ThemeProvider>
    );
};

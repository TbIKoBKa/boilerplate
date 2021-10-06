// Core
import React, { FC, useEffect } from 'react';
import { useWeather } from '../../../bus/days';
import { useFilter } from '../../../bus/client/filter';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Containers
import { Header } from '../../containers';

// Components
import { ErrorBoundary, Current, Filter, Forecast } from '../../components';
import { SpeedDial } from '@mui/material';

// Styles
import { Container, StyledMain } from './styles';

// Elements
import { Spinner } from '../../elements';

// Icons
import { RestartAltOutlined } from '@mui/icons-material';

const Main: FC = () => {
    const { data, fetchWeatherData, resetDaysAction } = useWeather();
    const { filters, setActiveDayAction, resetFilterAction } = useFilter();
    const { togglersRedux: { isFiltered, isDaysFetching }, resetTogglersToInitial } = useTogglersRedux();

    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
        setActiveDayAction(data[ 0 ]);
    }, [ data.length, isFiltered ]);

    return (
        <StyledMain>
            {
                !isDaysFetching
                    ? (
                        <Container>
                            <Header day = { filters.activeDay }/>
                            <Current day = { filters.activeDay  }/>
                            <Forecast
                                day = { filters.activeDay  }
                                filteredDays = { data }
                            />
                            <Filter />
                            <SpeedDial
                                ariaLabel = 'SpeedDial basic example'
                                icon = { <RestartAltOutlined /> }
                                sx = {{ position: 'absolute', bottom: 32, left: 32 }}
                                onClick = { () => {
                                    resetDaysAction();
                                    resetFilterAction();
                                    resetTogglersToInitial();
                                    fetchWeatherData();
                                } }
                            />
                        </Container>
                    )
                    : <Spinner />

            }
        </StyledMain>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

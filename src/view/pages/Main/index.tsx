// Core
import React, { FC, useEffect, useState } from 'react';
import { useWeather } from '../../../bus/days';

// Containers
import { Header } from '../../containers';

// Components
import { ErrorBoundary, Current, Filter, Forecast } from '../../components';

// Styles
import { Container, StyledMain } from './styles';

// Elements
import { Spinner } from '../../elements';

// Types
import { Day, Days } from '../../../bus/days/types';
import { filterContract } from './types';

const Main: FC = () => {
    const { data, fetchWeatherData } = useWeather();
    const [ activeDay, setActiveDay ] = useState<Day>();
    const [ filteredDays, setFilteredDays ] = useState<Days>([]);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
        setActiveDay(data[ 0 ]);
        setFilteredDays(data.slice(0, 7));
    }, [ data ]);

    const onFilterHandle: filterContract = (fields) => {
        const newFilteredData = data.filter((day) => {
            if ((fields.weatherType && day.type !== fields.weatherType)
                || (fields.minTemp && day.temperature < Number(fields.minTemp))
                || (fields.maxTemp && day.temperature > Number(fields.maxTemp))
            ) {
                return false;
            }

            return true;
        }).slice(0, 7);

        setFilteredDays(newFilteredData);
        setActiveDay(newFilteredData[ 0 ]);

        return newFilteredData;
    };

    return (
        <StyledMain>
            {
                data.length
                    ? (
                        <Container>
                            <Header day = { activeDay }/>
                            <Current day = { activeDay }/>
                            <Forecast
                                day = { activeDay }
                                filteredDays = { filteredDays }
                                setActiveDay = { setActiveDay }
                            />
                            <Filter onFilter = { onFilterHandle }/>
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

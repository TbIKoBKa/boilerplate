// Core
import styled from 'styled-components';

// Elements
import { Label } from '../../elements';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    margin-bottom: 83px;
`;

export const Logo = styled.img`
    margin-right: 30px;
    height: 88px;
`;

export const CurrentDate = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CurrentDayOfWeek = styled(Label)`
    text-transform: lowercase;
    line-height: normal;
`;

export const CurrentDayMonth = styled(Label)`
    text-transform: uppercase;
    line-height: normal;
`;

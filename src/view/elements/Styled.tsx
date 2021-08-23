import styled from 'styled-components';

export const AcceptButton = styled.button`
    display: inline-block;
    width: fit-content;
    padding: 12px 24px;
    border: 2px solid #108b00;
    border-radius: 8px;
    color: #108b00;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color .1s ease,
                color .1s ease;
    &:hover {
        background-color: #108b00;
        color: #fff;
    }
`;

export const CancelButton = styled(AcceptButton)`
    border-color: #cf1800;
    color: #cf1800;
    &:hover {
        background-color: #cf1800;
    }
`;

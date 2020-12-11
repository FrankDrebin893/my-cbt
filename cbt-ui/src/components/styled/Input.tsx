import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.25rem;
    border-radius: 3px;
    border: 1px solid black;
`

export const Button = styled.button`
    border-radius: 4px;
    border: 1px solid black;
    background: ${props => props.theme.colors.primary};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    font-weight: 800;
    &:hover {
        cursor: pointer
    }
`
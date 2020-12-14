import styled from 'styled-components';

export const Notification = styled.div<{
    open: boolean;
}>`
    display: ${props => props.open ? "block" : "block"};
    position: fixed;
    margin-right: 15px;
    margin-bottom: 15px;    
`

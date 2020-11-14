import styled from 'styled-components';

export const Navbar = styled.div`
    background: white;
    width: 100%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .1);
`

export const NavMenu = styled.ul`
    list-style-type: none;
    margin: 0;
`

export const NavMenuElement = styled.li`
    display: inline-block;
    padding: 25px;
    &:hover {
        border-bottom: -10px solid #6900af;
    }
`
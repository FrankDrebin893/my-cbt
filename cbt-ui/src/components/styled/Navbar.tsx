import { Link } from 'react-router-dom';
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
    padding: 20px;
    padding-bottom: 10px;
    max-height: 100% !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 10px solid rgba(0,0,0,0);
    &:hover {        
        border-bottom: 10px solid ${props => props.theme.colors.primary};
    }    
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
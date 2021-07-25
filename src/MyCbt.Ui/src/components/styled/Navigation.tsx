import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    background: white;
    width: 100%;
    overflow: auto;
    height: 60px;
    position: relative;
`

export const NavMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    height: 100%;
`

export const NavMenuElement = styled.li<{displayHover?: boolean}>`
    display: inline-block;
    padding: 20px;
    padding-bottom: 10px;
    max-height: 100% !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 10px solid rgba(0,0,0,0);
    height: 100%;
    &:hover {        
        border-bottom: ${props => props.displayHover ? `10px solid ${props.theme.colors.primary}` : ""};
    }    
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
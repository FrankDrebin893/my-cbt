import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
`

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

export const Input = styled.input`
    padding: 0.25rem;
    border-radius: 3px;
    border: 1px solid black;
    margin: 5px;
`

export const Button = styled.button`

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100%/2));
`

export const GridItem = styled.div`
    padding: 10px;
`

export const GridHeader = styled(GridItem)`
    font-weight: 600;
`

export const TableColumn = styled.div`
    flex: 1 0 100%;
    flex-direction: column;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
`
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;;
    }
`

export const Navbar = styled.nav`
    background: white;
    width: 100%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .1);
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
    color: black;
`

export const Input = styled.input`
    padding: 0.25rem;
    border-radius: 3px;
    border: 1px solid black;
    margin: 5px;
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

interface GridProps {
    columns: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(100%/${props => props.columns}));
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
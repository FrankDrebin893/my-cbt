import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;;
    }
`

export const AppBody = styled.div`
    width: 60%;
    padding: 10px;
    margin: 0 auto;
`

export const defaultPadding = css`
    padding: 10px
`
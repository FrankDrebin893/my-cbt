import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;;
    }
    html, body
    {
        height: 100%;
    }
`

export const AppBody = styled.div`
    width: 60%;
    padding-left, padding-right: 10px;
    margin: 0 auto;
    height: 100%;
    padding-top: 0;
`

export const defaultPadding = css`
    padding: 10px
`
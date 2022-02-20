import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto Slab', serif;
    }
`;

export default GlobalStyle;

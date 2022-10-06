import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    html{
        font-family: Poppins;
    }

    * {
        box-sizing: border-box;
    }

`;

export default GlobalStyle;
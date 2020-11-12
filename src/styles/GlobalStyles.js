import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
       font-family: 'Roboto', sans-serif;
       background: #000;
    }
`;

export default GlobalStyles;


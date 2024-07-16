import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Pretendard-Regular, sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    input {
        border: none;
        outline: none;
    }
    
    button {
        border: 0;
        background-color: transparent;
    }
    
    ${reset}
`;

export default GlobalStyle;

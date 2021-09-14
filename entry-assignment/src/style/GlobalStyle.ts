import  { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
export const GlobalStyle=createGlobalStyle`
    ${normalize}
    *{
        box-sizing: border-box;
     
    }
    input,button{
        border:none;
        outline:none;
    }
`


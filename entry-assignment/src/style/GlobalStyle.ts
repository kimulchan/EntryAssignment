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
    a{
        text-decoration: none; 
        outline: none;
        color:black;
    }
    button{
        cursor: pointer;
    }
`


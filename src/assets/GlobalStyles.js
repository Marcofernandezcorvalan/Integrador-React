import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --background: #0d0d0d;
    --secondbackground: #1f1f1f;
    --text: #fff;
    --secondarytext: #76b900;
    --thirdtext: #9bd23d;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style-type: none;
        font-family: "Poppins", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }
    
    body {
        box-sizing: border-box;   
        margin: 0;
        padding: 0;
        background: #0d0d0d;
        font-family:'Poppins', 'Courier New';
        color: white;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        text-decoration: none;
    }

`;

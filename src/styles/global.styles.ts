import { createGlobalStyle } from "styled-components";
import Theme from "@/types/themes";

interface GlobalStyleProps {
  theme: Theme; // Add the Theme interface as a prop
}

export default createGlobalStyle<GlobalStyleProps>`
  :root {
    /* Colors */
    --primary: ${(props) => props.theme.color.primary};
    --secundary: ${(props) => props.theme.color.secundary};
    --background: ${(props) => props.theme.color.background};
    --error: ${(props) => props.theme.color.error};
    --warning: ${(props) => props.theme.color.warning};
    --complete: ${(props) => props.theme.color.complete};
    --border: ${(props) => props.theme.color.border};
    --transparency: ${(props) => props.theme.color.transparency};

    /* Texts */
    --basic: ${(props) => props.theme.text.basic};
    --contrast: ${(props) => props.theme.text.contrast};
    --bright: ${(props) => props.theme.text.bright};

    /* Fonts */
    --main: ${(props) => props.theme.font.family};
    --micro: ${(props) => props.theme.font.micro};
    --small: ${(props) => props.theme.font.small};
    --medium: ${(props) => props.theme.font.medium};
    --large: ${(props) => props.theme.font.large};
    --big: ${(props) => props.theme.font.big};
    --huge: ${(props) => props.theme.font.huge};
    --subtitle: ${(props) => props.theme.font.subtitle};
    --title: ${(props) => props.theme.font.title};

    /* Shadows */
    --basicShadow: ${(props) => props.theme.shadow.basic};
    --darkShadow: ${(props) => props.theme.shadow.dark};
    --normalShadow: ${(props) => props.theme.shadow.normal}; 

    /* Transitions */
    --fast: ${(props) => props.theme.transition.fast};
    --normal: ${(props) => props.theme.transition.normal};
    --slow: ${(props) => props.theme.transition.slow};
  }

  body {
    margin: 0;
  }

  html {
    font-size: 62.5%; 
  }

  ::-webkit-scrollbar {
    width: 6px;
    margin: 20px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--contrast);
    border-radius: 100px;
    
  }

  * {
    font-family: var(--main);
    position: relative;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    border: none;
  }
  
/* 
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--primary) inset;
    transition: background-color 5000s ease-in-out 0s;
  } */

  .flex {
    display: flex;
  }

  .flex_ccr {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex_ccc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .flex_scc {
    display: flex;
    align-items: flex-start;
    justify-content: center;    
    flex-direction: column;
  }

  .flex_csr {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .flex_csb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex_sbr {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .flex_ssr {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .flex_ssc {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .flex_cls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .w100 {
    width: 100%;
  }

  .wfc {
    width: 100%;
  }

  .wv100 {
    width: 100vw;
  }

  .wfs {
    width: -webkit-fill-available;
  }

  .hfs {
    height: -webkit-fill-available;
  }

  .test {
    border: 1px solid gray;
    border-radius: 20px;
  }

  form {
    margin: 50px 0;
  }

  button, a, input {
    transition: var(--fast);
  }


  button:hover{
    cursor: pointer;
    opacity: 0.75;
  }

  input,
  select {
    outline: none;
    width: 100%;
  }

  h3,
  h2 {
    font-size: 70px;
    font-weight: 300;
  }
  
  span {
    font-size: var(--large);
    font-weight: 500;
    padding: 10px ;
  }
`;

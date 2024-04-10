import Theme from "@/types/themes";
import { createGlobalStyle } from "styled-components";

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
    --success: ${(props) => props.theme.color.success};
    --border: ${(props) => props.theme.color.border};
    --ground: ${(props) => props.theme.color.ground};
    --transparency: ${(props) => props.theme.color.transparency};

    /* Texts */
    --basic: ${(props) => props.theme.text.basic};
    --contrast: ${(props) => props.theme.text.contrast};
    --bright: ${(props) => props.theme.text.bright};

    /* Fonts */
    --main: ${(props) => props.theme.font.main};
    --second: ${(props) => props.theme.font.second};
    --micro: ${(props) => props.theme.font.micro};
    --small: ${(props) => props.theme.font.small};
    --medium: ${(props) => props.theme.font.medium};
    --large: ${(props) => props.theme.font.large};
    --big: ${(props) => props.theme.font.big};
    --huge: ${(props) => props.theme.font.huge};
    --subtitle: ${(props) => props.theme.font.subtitle};
    --title: ${(props) => props.theme.font.title};
    --thin: ${(props) => props.theme.font.thin};
    --extraLight: ${(props) => props.theme.font.extraLight};
    --light: ${(props) => props.theme.font.light};
    --normal: ${(props) => props.theme.font.normal};
    --semiBold: ${(props) => props.theme.font.semiBold};
    --bold: ${(props) => props.theme.font.bold};
    --extraBold: ${(props) => props.theme.font.extraBold};

    /* Shadows */
    --basicShadow: ${(props) => props.theme.shadow.basic};
    --darkShadow: ${(props) => props.theme.shadow.dark};
    --normalShadow: ${(props) => props.theme.shadow.normal}; 

    /* Transitions */
    --fast: ${(props) => props.theme.transition.fast};
    --regular: ${(props) => props.theme.transition.regular};
    --slow: ${(props) => props.theme.transition.slow};

    --toastify-color-light: var(--basic);
    --toastify-color-dark: var(--background);
    --toastify-color-info: var(--primary);
    --toastify-color-success: var(--success);
    --toastify-color-warning: var(--warning);
    --toastify-color-error: var(--error);
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
    border: none;
    margin: 0;
  }
  

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--secundary) inset;
  }

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

  .flex_ssc {
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

  .flex_ccr {
    display: flex;
    align-items: center;
    justify-content: center;
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
  
  .read_only {
    opacity: .5;
  }

  .editing {
    animation: glowing 0.56s infinite alternate ease-in-out;
  }

  @keyframes glowing {
    0% {
      outline: 1px solid var(--ground);
    }
    100% {
      outline: 1px solid #454545;
    }
  }

  button, a, input {
    transition: var(--fast);
  }


  /* button:hover{
    cursor: pointer;
    opacity: 0.75;
  } */

  input,
  select {
    outline: none;
    width: 100%;
    appearance: none; /* Remove default appearance */
    -webkit-appearance: none; /* For older browsers */
    min-width: 100px;
  }

  input,select {
    background-color: var(--transparency);
    color: var(--basic);
    border-radius: 3px;
  }


  input::placeholder {
    color: var(--bright);
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

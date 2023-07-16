// import styled from "styled-components";

// export const AppContainer = styled.div`
//   background-color: var(--light);
//   transition: var(--normal);
//   min-height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   color: var(--normal);
// `;

// export const Container = styled.div`
//   width: -webkit-fill-available;
//   height: 100vh;
//   position: relative;
// `;

// export const Wrapper = styled.div`
//   box-shadow: var(--normalShadow);
//   background-color: var(--wrapper);
//   transition: var(--normal);
//   width: -webkit-fill-available;
//   height: -webkit-fill-available;
//   margin: 15px 15px 15px 0px;
//   border-radius: 25px;
//   padding: 30px;
//   position: relative;
//   flex-direction: column;
//   z-index: 10;
//   display: flex;
// `;

// export const Modal = styled.div`
//   background-color: rgb(0 0 0 / 1%);
//   backdrop-filter: blur(5px);
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 200;
//   top: 0;
//   left: 0;
// `;

// export const Box = styled.div`
//   box-shadow: var(--darkShadow);
//   background-color: var(--modal);
//   transform: translate(50%, -50%);
//   padding: 30px;
//   border-radius: 20px;
//   position: absolute;
//   top: 50%;
//   right: 50%;

//   .btn_delete {
//     background-color: var(--error);
//     font-size: var(--small);
//     border-radius: 10px;
//     cursor: pointer;
//     display: block;
//     margin-top: -20px;
//     padding: 0 15px;
//     color: var(--basic);
//     transition: var(--basicTransition);

//     :hover {
//       box-shadow: var(--darkShadow);
//       transform: scale(1.012);
//     }
//   }

//   .react-tabs {
//     margin-top: 10px;
//     ul {
//       text-align: center;
//       margin-bottom: 50px;
//       padding: 0;

//       li {
//         border: none;
//         border-bottom: 2px solid var(--light);
//         border-radius: 15px 15px 0 0;
//         font-size: var(--medium);
//         transition: var(--basicTransition);
//         width: 50%;
//         color: var(--border);
//         font-weight: 400;
//         padding: 0;
//       }

//       .react-tabs__tab--selected {
//         background-color: var(--modal);
//         border-bottom: 2px solid var(--secundary);
//         color: var(--secundary);
//         font-weight: 500;
//       }
//       .react-tabs__tab:focus:after {
//         display: none;
//       }
//     }
//   }
// `;

// export const SelectInput = styled.div`
//   position: relative;
//   width: fit-content;

//   :after {
//     content: ">";
//     font-weight: 500;
//     transform: rotate(90deg);
//     color: var(--contrast);
//     pointer-events: none;
//     font-size: var(--big);
//     right: 20px;
//     bottom: 30px;
//     transition: var(--basicTransition);
//     position: absolute;
//   }

//   :hover {
//     p {
//       color: var(--basic);
//       background-color: var(--secundary);
//       border: 2px solid var(--secundary);
//       top: -31px;
//     }

//     :after {
//       color: var(--secundary);
//     }
//   }

//   p {
//     font-size: var(--medium);
//     font-weight: 400;
//     transition: var(--basicTransition);
//     color: var(--bright);
//     background-color: var(--background);
//     width: fit-content;
//     border-radius: 10px 10px 0px 0;
//     position: absolute;
//     border: 2px solid transparent;
//     padding: 2px 15px;
//     top: -17px;
//   }

//   select {
//     border: 2px solid var(--light);
//     border-radius: 0 10px 10px 10px;
//     width: 401px;
//     height: 46px;
//     margin-bottom: 25px;
//     color: var(--contrast);
//     font-weight: 600;
//     font-size: var(--medium);
//     transition: var(--basicTransition);
//     background-color: var(--background);
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     position: relative;

//     :focus + p {
//       color: var(--basic);
//       background-color: var(--secundary);
//       border: 2px solid var(--secundary);
//       top: -31px;
//     }

//     :focus,
//     :hover {
//       border: 2px solid var(--secundary);
//     }

//     ::placeholder {
//       font-weight: 400;
//       color: var(--border);
//       font-size: var(--medium);
//     }
//   }
// `;

// export const Title = styled.div`
//   margin-bottom: 20px;

//   h1 {
//     color: var(--contrast);
//     transition: var(--normal);
//     font-size: ${(props) => (props.big ? "var(--big)" : "var(--huge)")};
//   }

//   p {
//     margin-top: -5px;
//     font-size: var(--medium);
//     transition: var(--normal);
//     color: var(--bright);
//   }

//   span {
//     color: var(--bright);
//     transition: var(--normal);
//     padding: 5px;
//   }

//   .filter {
//     width: 200px;
//   }

//   .year {
//     background-color: var(--background);
//     border-right: none;
//     width: fit-content;
//     padding: 0 15px 0 5px;
//     border-radius: 10px;
//     height: 35px;

//     select {
//       padding-right: 25px;
//       height: 35px;
//     }
//   }
// `;

// export const Search = styled.div`
//   background-color: var(--background);
//   box-shadow: var(--basicShadow);
//   border: 3px solid transparent;
//   color: var(--contrast);
//   display: flex;
//   height: 50px;
//   border-radius: 15px;

//   :hover {
//     border: 3px solid var(--secundary);
//   }

//   input {
//     background-color: var(--background);
//     color: var(--contrast);
//     border-radius: 15px;
//     margin-left: 10px;
//     height: calc(100% - 3px);
//     border: none;

//     ::placeholder {
//       font-weight: 300;
//       color: var(--bright);
//     }

//     :focus {
//       border: none;
//     }
//   }
// `;

// export const Select = styled.div`
//   margin-left: 5px;
//   width: 300px;
//   height: 100%;
//   padding-right: 25px;
//   border: none;
//   border-right: 1px solid var(--border);
//   border-radius: 15px;

//   select {
//     background-color: var(--background);
//     height: calc(100% - 3px);
//     color: var(--contrast);
//     cursor: pointer;
//     border-radius: 15px;
//     border: none;

//     :focus {
//       border: none;
//     }
//   }
// `;

// export const Filter = styled.div`
//   margin-left: 5px;
//   width: 250px;
//   height: 100%;
//   padding-right: 25px;
//   border: none;
//   position: relative;

//   :after {
//     content: ">";
//     font-weight: 500;
//     transform: rotate(90deg);
//     color: var(--secu);
//     pointer-events: none;
//     font-size: var(--big);
//     right: 40px;
//     transition: var(--basicTransition);
//     position: absolute;
//   }

//   select {
//     background-color: var(--background);
//     height: calc(100% - 3px);
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     color: var(--contrast);
//     padding: 7px;
//     cursor: pointer;
//     border-radius: 5px;
//     border: none;

//     :focus {
//       border: none;
//     }
//   }
// `;

// export const NewButton = styled.button`
//   background-color: var(--contrast);
//   color: var(--background);
//   font-size: var(--big);
//   font-weight: 300;
//   margin-left: 20px;
//   cursor: pointer;
//   padding: 0px 10px;
//   border-radius: 10px;
//   transition: var(--basicTransition);

//   :hover {
//     background-color: var(--background);
//     color: var(--contrast);
//     box-shadow: var(--basicShadow);
//   }
// `;

// export const Table = styled.div`
//   margin-top: 20px;
//   font-weight: 300;
//   font-size: var(--medium);
//   flex: 1;
//   overflow: auto;
//   margin-right: -15px;
// `;

// export const List = styled.div`
//   border-radius: 2rem;
//   background-color: var(--background);
//   cursor: default;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 0px 50px;
//   break-before: 5px;
//   margin-bottom: 15px;
//   color: var(--contrast);
//   font-weight: 300;
//   font-size: var(--big);
//   box-shadow: var(--basicShadow);
//   cursor: pointer;
//   margin-right: 10px;
//   transition: var(--fast);
//   display: flex;

//   :hover {
//     background-color: var(--primary);
//     color: var(--basic);
//   }

//   .title {
//     flex: 1;
//     h2 {
//       font-size: var(--big);
//       font-weight: 500;
//       margin-bottom: 20px;
//       display: -webkit-box;
//       -webkit-line-clamp: 1;
//       -webkit-box-orient: vertical;
//       overflow: hidden;
//       text-overflow: ellipsis;
//     }

//     p {
//       font-size: var(--small);
//       color: var(--bright);
//       margin-bottom: -5px;
//       margin-top: 2rem;
//     }
//   }

//   .price {
//     text-align: right;
//     list-style: none;
//     flex: 1;

//     h2 {
//       font-size: var(--big);
//       margin-top: 20px;
//     }

//     p {
//       font-size: var(--medium);
//       margin-bottom: 00px;
//       color: var(--bright);
//       font-weight: 300;
//       margin-top: -10px;
//     }
//   }

//   .situation {
//     text-align: center;
//     flex: 1;

//     .ball {
//       width: 10px;
//       height: 10px;
//       border-radius: ${(props) => (props.fiscal ? "2px" : "10px")};
//       background-color: ${(props) => props.color};

//       margin: 0 5px 17px 0;
//     }

//     h2 {
//       font-size: var(--big);
//       font-weight: 500;
//       margin-bottom: 20px;
//     }

//     p {
//       font-size: var(--small);
//       color: var(--normal);
//       margin-bottom: -5px;
//       margin-top: 2rem;
//     }
//   }
// `;

// export const Form = styled.form`
//   margin: 50px 0 0 0;

//   .holder {
//     position: relative;

//     button {
//       background-color: var(--secundary);
//       transition: var(--fast);
//       color: var(--basic);
//       position: absolute;
//       border-radius: 10px;
//       cursor: pointer;
//       padding: 7.5px 15px;
//       right: 5px;
//       top: 6px;

//       :hover {
//         background-color: var(--primary);
//       }
//     }
//   }
// `;

// export const Error = styled.div`
//   p {
//     color: var(--bright);
//   }
//   span {
//     color: var(--secundary);
//     padding: 0;
//   }
// `;

// export const ThemeChanger = styled.button`
//   background-color: var(--background);
//   color: var(--contrast);
//   padding: 10px 30px;
//   border-radius: 20px;
//   position: absolute;
//   transition: var(--normal);
//   top: 20px;
//   right: 20px;
//   cursor: pointer;

//   :hover {
//     background-color: var(--contrast);
//     color: var(--background);
//   }
// `;

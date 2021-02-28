import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // 1. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react";
// function App() {
//   // 2. Use at the root of your app
//   return (
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react"
import {createGlobalStyle} from "styled-components"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
`

function App(){
  return(
    <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
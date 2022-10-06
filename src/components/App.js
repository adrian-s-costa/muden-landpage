import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../styles/globalStyle';
import Home from "./Home"
import Header from "./Header"

export default function App (){
  
  return(
    <>
      <GlobalStyle />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
    )
}
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../styles/globalStyle';
import Home from "./Home"
import Header from "./Header"
import Favicon from 'react-favicon'

export default function App (){
  
  return(
    <>
      <Favicon url='https://res.cloudinary.com/dmo7nzytn/image/upload/v1665158222/muden/drilldown_cezjly.png' />
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
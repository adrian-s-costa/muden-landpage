import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from "./Home"

export default function App (){
   
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    )
}
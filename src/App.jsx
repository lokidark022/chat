import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Homepage from './pages/HomePage';
import HomeContext from './provider/HomeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [email, setEmail] =useState();


  return (
    <>
    <BrowserRouter>
      <HomeContext.Provider value={{email, setEmail}}>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </HomeContext.Provider>
    </BrowserRouter>
   
    </>
  )
}

export default App

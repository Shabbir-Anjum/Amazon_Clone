import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Accessories_Cards from './Components/Accessories cards/Accessories_Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Header/>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Hero/>}/>
    </Routes>
    </BrowserRouter>
  
   
    </>
  )
}

export default App

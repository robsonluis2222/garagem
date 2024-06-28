import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Social from './components/Social'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Social />
      <Outlet />
    </>
  )
}

export default App

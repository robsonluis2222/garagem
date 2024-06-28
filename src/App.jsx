import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

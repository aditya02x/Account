import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Home from './components/Home'
import { Router } from 'express'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  const [token,setToken]=useState(localStorage.getItem("token") || "")


  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login setToken={setToken} />}/>
        <Route path="home" element={<Home token={token} />}/>
        
        
      </Routes>
    </Router>
    
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route Component={About} path={"/about"} />
        <Route Component={Contact} path={"/contact"} />
        <Route Component={Login} path={"/login"} />
        <Route Component={Signup} path={"/signup"} />
        <Route Component={App} path={"*"} />
      </Routes>
    </BrowserRouter>
    
)

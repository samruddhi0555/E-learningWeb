import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/header/header.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import Verify from './pages/auth/Verify.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './pages/about/About.jsx'
import Account from './pages/account/Account.jsx'
import { UserData } from './context/UserContext.jsx'

const App = () => {
  const {user} = UserData();
  console.log(user);
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        

      </Routes>
      <Footer/>
    </BrowserRouter>
    
</>
  )
}

export default App

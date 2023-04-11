import React,{useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
// Home, Skills, Testimonial, Work, About, EmptyPage
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    Story, 
    Footer,
    Header,
    Shop,
    Product,
    Home
} from './components/index.js'
import Navbar from "./components/Navbar/Navbar";
import {
  Orders,
  Cart,
  Login,
  Register,
  Contact
} from "./Scomponent/index.js"

const App = () => {
  const [ login, setLogin ] = useState(false);
  return (
    <BrowserRouter>
        <div className="wapper-container">
            <Header login={login}/>
            <Navbar />
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/STORY" element={<Story />} />
            <Route path="/SHOP" element={<Shop />} />
            <Route path="/PRODUCT" element={<Product />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login setLogin={setLogin}/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

// localhost:3000
// localhost:3000/Home
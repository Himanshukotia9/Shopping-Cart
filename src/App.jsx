import React from 'react'
import Navbar from './Component/Navbar'
import Products from './Component/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bag from './Component/Bag'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/bag" element={<Bag/>} />
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

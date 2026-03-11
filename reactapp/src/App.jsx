import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelPage from './pages/HotelPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotel.html" element={<HotelPage />} />
    </Routes>
  )
}

export default App
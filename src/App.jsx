
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Index from "./Pages/Index.jsx";
import RoomPage from './Pages/RoomPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} ></Route>
        <Route path="/room/:roomId" element={<RoomPage />} ></Route>
      </Routes>
    </div>
  )
}

export default App

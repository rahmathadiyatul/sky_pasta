import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js'

function App() {

  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js'
import LandingPage from './Components/LandingPage/LandingPage.js';

function App() {

  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/landing-page" />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

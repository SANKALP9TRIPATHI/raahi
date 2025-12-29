import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Civilian from './pages/Civilian';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/mainlayout" element={<MainLayout />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/civilian" element={<Civilian />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/footer" element={<Footer />} />
            </Route>
          </Routes>
        </BrowserRouter>
    
  );
}

export default App


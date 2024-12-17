import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Technology from './components/Technology';
import Crew from './components/Crew';

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <Header location={location} />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

function App() {


  return (
    <>
      <Router >
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
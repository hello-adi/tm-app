import './App.css';
import Home from './pages/Home'
import Preview from './pages/preview'
import Pools from './pages/Table'
import Portfolio from './pages/Portfolio'
import Available from './pages/Available'
import Login from './pages/Login'

import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [current,setCurrent]=useState("")
  return (
    <div className="App">
         <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/available" element={<Available />} />
        <Route path="/portfolio" element={<Portfolio data={current} setData={setCurrent} />} />
        <Route path="/pools"  element={<Pools data={current} setData={setCurrent} />} />
        <Route path="/preview-page" element={<Preview />} />
        <Route path="/" element={<Login />} /> 
        {/* home path change */}
      </Routes>
    </div>
  );
}

export default App;

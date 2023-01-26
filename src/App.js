import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
} 

export default App;

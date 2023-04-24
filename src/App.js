import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css";
import './Bottom.css';
import './Projects.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Bottom from './pages/Bottom';
import QuantumMechanicsProject from './components/QM';
import MechanicsProject from './components/M';
import FulidMechanicsProject from './components/FM';


import Feed from "./components/ContactFeed";

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/qie" element={<QuantumMechanicsProject/>}/>
        <Route path="/projects/fm" element={<FulidMechanicsProject/>}/>
        <Route path="/projects/m" element={<MechanicsProject/>}/>
        {/* <Route exact path="/projects/:id" element={<ProjectDetails/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Bottom/>
    </div>
  );
} 

export default App;



// import Navbar from "./Components/Navbar";


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <h1>Blockstagram</h1>
//       <Feed/>
//     </div>
//   );
// }

// export default App;
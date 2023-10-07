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
import QuantumMechanicsProject from './components/labQIE';
import OpticalPumpingProject from './components/labOPT';
import MuonLifetimeProject from './components/labMUO';
import ElectricVehicleChargingStationsProject from './components/evcs';
import ProblemAdd from './components/ProblemAdd';
import ProblemUpdate from './components/ProblemUpdate';
import ProblemSets from './components/ProblemSets';
import Feed from "./components/ContactFeed";

function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <div className='mainContent'>
      <Routes>
        <Route path="/website" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/qie" element={<QuantumMechanicsProject/>}/>
        <Route path="/projects/muo" element={<MuonLifetimeProject/>}/>
        <Route path="/projects/opt" element={<OpticalPumpingProject/>}/>
        <Route path="/projects/evcs" element={<ElectricVehicleChargingStationsProject/>}/>
        <Route path="/contact" element={<ProblemAdd/>}/>
        {/* <Route path="/contact/add" element={<ProblemAdd/>}/> */}
        <Route path="/update/:id" element={<ProblemUpdate/>}/>
        <Route path="/contact/sets" element={<ProblemSets/>}/>
      </Routes>
      </div>
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
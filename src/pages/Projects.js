import React from 'react';
import Bottom from './Bottom';
import { Link } from 'react-router-dom';
import projects from '../projectsData';
import qieCover from '../assets/qieCover.png'
import '../Projects.css';
// import '../css/projects.css';


function Projects() {
    return (
        <div className="projects-container">
            <div className="project">
            <Link to="/projects/qie">
                <img src={qieCover} alt="Quantum Mechanics" />
                <div className="content">
                    <h2>Quantum Interference & Entanglement</h2>
                    <p>111B experiment</p>
                    <a>View project</a>
                </div>  
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/m">
                <img src={'https://via.placeholder.com/350x150'} alt="Police Department" />
                <div className="content">
                    <h2>Optical Pumping</h2>
                    <p>111B experiment</p>
                    <a>View project</a>
            </div>
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/fm">
                <img src={'https://via.placeholder.com/350x150'} alt="City Planning" />
                <div className="content">
                    <h2>City Planning</h2>
                    <p>Description of city planning project</p>
                    <a>View project</a>
                </div>
            </Link>
            </div>
      </div>
    );
  }
  

export default Projects;


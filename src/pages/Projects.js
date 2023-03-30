// import React from 'react';
// import Bottom from './Bottom';
// import '../Projects.css';

// function Projects(){
//     return(
//         <div>
//             <h1>projects: radio. wind turbine, qie, opt, ML,</h1>
//             <div class="work">
//                 <div class="w1"> 
//                     <div class="w-image">
//                         <iframe src="https://drive.google.com/file/d/1uPvvKDy1eoqkeVpyEgmqvapaMfY2i6Fs/preview" width="480" height="360" allow="autoplay"></iframe> 
//                     </div>
//                     <div class="w-descript">  
//                         <h5>Audio-Reactive LED System </h5>  
//                         In Physics 111A, my teammate and I created a synchronized "lightshow" for a pre-downloaded sound file. 
//                         <br/><br/>
//                         Each set of LED lightbulbs corresponds to a frequency range. 
//                         When the frequecy is detected and determined to be in a specific range, 
//                         <br/>
//                         the corresponding lightbulb will be triggered.
//                     </div>
//                 </div>
//                 <div class=" w2"> 
//                     <div class="w-image">
//                         <iframe src="https://drive.google.com/file/d/1epuFYnEsAye5P417ePkAHbBI1uumc-mV/preview" width="480" height="360" allow="autoplay"></iframe>
//                     </div>
//                     <div class="w-descript"> 
//                         <h5>Air Cannon Science Project </h5>  
//                         At Longfellow Middle School, I volunteered to mentor students on their science project.
//                         <br/><br/>
//                         We used apples and a pre-built air cannon to explore "how does increase PSI(20/40/60) 
//                         of an air cannon affect the distance a projectile flies away from the barrel?"
//                     </div>
//                 </div>
//             </div>
//             <Bottom />
//         </div>
//     )
// }

// export default Projects;


import React from 'react';
import Bottom from './Bottom';
import { Link } from 'react-router-dom';
import projects from '../projectsData';
import '../Projects.css';


// function Project({ project }) {
//     return (
//       <Link to={`/projects/${project.id}`}>
//         <div className="project">
//             <img src={project.image} alt={project.title} />
//             <div className="content">
//                 <h2>{project.title}</h2>
//                 <p>{project.description}</p>
//                 <a href={project.link}>View project</a>
//             </div>
//         </div>
//       </Link>
//     );
//   }
  
// function Projects() {
// return (
//     <div>
//         <div id="projects-container">
            
//             {projects.map(project => (
//                 <Project key={project.id} project={project} />

//             ))}
//         </div>
//         {/* <Bottom/>  */}
//     </div>
// );
// }


function Projects() {
    return (
        <div className="projects-container">
            <div className="project">
            <Link to="/projects/qie">
                <img src={'https://via.placeholder.com/350x150'} alt="Quantum Mechanics" />
                <div className="content">
                    <h2>Quantum Mechanics</h2>
                    <p>Description of quantum mechanics project</p>
                    <a>View project</a>
                </div>  
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/m">
                <img src={'https://via.placeholder.com/350x150'} alt="Police Department" />
                <div className="content">
                    <h2>Police Department</h2>
                    <p>Description of police department project</p>
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


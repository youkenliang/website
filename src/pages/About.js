import React from 'react';
import Bottom from './Bottom';
import bighead from '../assets/bighead.jpg';

import '../About.css';

function About() {
  return (
    <div className="About">
      {/* <header className="header">
        <h1>About Me</h1>
      </header> */}
      <main className="main">
        <div className="container">
          <div className="image">
            <img src={bighead} alt="Profile" />
          </div>
          <div className="text">
            <h2>Youcan Liang</h2>
            <p>Undergraduate Student at UC Berkeley</p>
            <p>I will be graduating with a BA in Physics in May 2023. </p>
            <br/>
            <p>The Three-Body Problem?</p>
            <p>Someday or One Day?</p>
            <p>Cheap flight from SFO to HKG?</p>
            {/* <a href="#">Download Resume</a> */}
          </div>
        </div>
      </main>
      {/* <footer className="footer">
        <p>Contact me: john.doe@gmail.com</p>
      </footer> */}
    </div>
  );
}

export default About;


// function About(){
//     return(
//         <div>
//             <h1>About</h1>
//             <div class="socialmedia">
//                 <a href="https://www.instagram.com/you_ken_liang/?hl=en" target=" blank"> 
//                     <img src="instagram_logo.png"  width="50px" height="50px"alt="Intagram"></a>
//                 <br/><br/>
//                     <a href="https://linkedin.com/in/youcanliang/" target="_blank">
//                     <img src="linkedin_logo.png"  width="50px" height="50px"alt="linkedin"></a>
//                 <br/><br/>
//                 <img src="email_logo.png"  width="50px" height="50px"alt="Emil">
//             </div>
//         </div>
//     )
// }
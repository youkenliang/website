import React from 'react';
import bighead from '../assets/bighead.png';

import '../css/about.css';

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
            <p> </p>
            <p>I'd rather be traveling than writing about myself.</p>
            <br/>
            <p>Things that fascinate me:</p>
            <p>Cheap flight from SFO to HKG</p>
            <p><i>Three-Body Problem</i></p>
            <p>Wireless Charging</p>
            
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
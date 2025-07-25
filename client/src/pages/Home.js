import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

function Home(){
    return(
        <div className="home-container">
            <div className='row1'>
                <div className='about'>
                    <div className="hexagon">
                    <Link to="/about">
                        <div class="hexagonContent">
                            <h1>About Me</h1>
                            {/* <p>adasf</p> */}
                        </div>
                    </Link>
                    </div>
                </div>
            </div>

            <div className='row2'>
                <div className='projects'>
                    <div className="hexagon">
                    <Link to="/projects">
                        <div class="hexagonContent">
                            <h1>Projects</h1>
                            {/* <p>Subtitle about yourself</p> */}
                        </div>
                    </Link>
                    </div>
                </div>
                <div className='contact'>
                    <div className="hexagon">
                    <Link to="/contact">
                        <div class="hexagonContent">
                            <h1>Contact</h1>
                            {/* <p>Subtitle about yourself</p> */}
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;



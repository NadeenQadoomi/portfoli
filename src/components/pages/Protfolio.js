import React from 'react';
import Navbar from '../Navbar/Navbar';
import proj from '../Assets/images/proj.png';

function Portfolio() {  
  return (
    <div>
      <Navbar />
      <section id="portfolio">  
        <div className="service-project">  
          <img 
            className="my-project" 
            src={proj}  
            alt="Project screenshot"  
          />
          <br />
          <a 
            className="university-project" 
            href="https://github.com/NadeenQadoomi/flutter.git"
            target="_blank"  
            rel="noopener noreferrer"  
          >
            University graduation project  
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;  
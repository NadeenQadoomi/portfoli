import React from 'react';
import Navbar from '../Navbar/Navbar';

import photo2 from '../Assets/images/photo2.jpg';

function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="main-div">
          <div className="div1">              
            <p style={{ fontSize: '25px' }}>Hi, I am Nadeen, a frontend and backend developer for web and Flutter, and software engineering graduate.</p>
            <div>
              <a href="/about" className="btn">ABOUT ME</a> 
            </div>
          </div>
          
          <div>
            <img 
              src={ photo2} 
              alt="Nadeen" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
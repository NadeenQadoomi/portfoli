import React from 'react';
import Navbar from '../Navbar/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <section className="sec">
        <div style={{ margin: 'auto' }}>
          <h1 style={{ textAlign: 'center' }}>About</h1>
          <p>I am a dedicated software engineering graduate from the World Islamic Sciences and Education (WISE) University.</p>
        </div> 
        <div className="about-section">
          <div className="info">
            <h2>Flutter & Web Developer</h2>
            <p>Some information about myself:</p>
            <div className="details">
              <ul>
                <li><strong>Birthday:</strong> 13 nov 2001</li>
                <li><strong>Age:</strong> 23</li>
                <li><strong>Degree:</strong> Bachelor's</li>
                <li><strong>Phone:</strong> +962796411533</li>
                <li><strong>Email:</strong> nadeenqadoomi11@gmail.com</li>
                <li><strong>City:</strong> Amman, Jordan</li>
                <li><strong>Freelance:</strong> Available</li>
              </ul>
            </div>
            <p>Accordingly, I am looking for a job in the field of data analysis, QA, Test, or development.</p>
          </div>
        </div>
        <br />
        <h1 style={{ margin: 'auto' }}>Skills</h1>
        <br /><br />
        <div className="div2">
          <div style={{ marginLeft: '200px' }}>
            <ul style={{ listStyle: 'disc' }}>
              <li>Web Developer</li>
              <li>Work under pressure</li>
              <li>Problem-solving abilities</li>
              <li>Strong communications</li>
            </ul>
          </div>
          <div style={{ marginLeft: '500px' }}>
            <ul style={{ listStyle: 'disc' }}>
              <li>Testing API</li>
              <li>Flutter</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
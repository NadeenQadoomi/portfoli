import React from 'react';
import Navbar from '../Navbar/Navbar';

function Certificates() {
  return (
    <div>
      <Navbar />
      <section id="services">
        <div className="service">
          <h3>Agile management methodology</h3>
          <p>I got a certificate in Agile management methodology from Jordan Kuwait Bank on 22/August/2024.</p>
        </div>
        <div className="service">
          <h3>Security Information and Cybersecurity</h3>
          <p>I got a certificate in Information Security and Cyber Security from Jordan Kuwait Bank on 30/July/2024.</p>
        </div>
        <div className="service">
          <h3>Academic services for the IT</h3>
          <p>The application was created using the Filter programming language. The scope of Our project aims to save students time and 
            effort by providing free recordings of faculty lectures and summaries for a wide range of disciplines and majors.</p>
        </div>
        <div className="service">
          <h3>Basic Android</h3>
          <p>I got my 12 hour Basic Android certification from Step By Step.</p>
        </div>
        <div className="service">
          <h3>Basic Flutter</h3>
          <p>I got a 3-month Basic Flutter certification from Pioneers Academy.</p>
        </div>
        <div className="service">
          <h3>Advance Flutter</h3>
          <p>I got a 3-month Advance Flutter certification from Pioneers Academy.</p>
        </div>
      </section>
    </div>
  );
}

export default Certificates;
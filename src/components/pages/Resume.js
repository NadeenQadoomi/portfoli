import React from 'react';
import Navbar from '../Navbar/Navbar';

function Resume() {
  return (
    <div>
      <Navbar />
      <section className="sec">
        <div style={{ margin: 'auto' }}>
          <h1 style={{ textAlign: 'center' }}>Resume</h1>
        </div> 
        <div className="div11">
          <div className="div22">
            <div>
              <h3>Summary</h3>
              <h4 style={{ fontSize: '2em', color: '#555' }}>NADEEN SALEM</h4>
              <p>I am a dedicated software engineering graduate from the World Islamic Sciences and Education (WISE) University, driven by a 
                deep passion for using technology to address contemporary challenges. Currently, I have completed my internship in the IT 
                department of Jordan Kuwait Bank, where I gained valuable hands-on experience in IT operations and software development.</p>
              <ul style={{ listStyle: 'disc' }}>
                <li>Jordan, Amman</li>
                <li>+962796411533</li>
                <li>nadeenqadoomi11@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3>Professional Experience</h3>
              <h4 style={{ fontSize: '2em', color: '#555' }}>Trainee at Jordan Kuwait Bank</h4>
              <h5>07/2024 - 08/2024</h5>
              <p className="my-training">During my training at Jordan Kuwait Bank's Information 
                Technology Department, I have been actively developing skills in 
                Robotic Process Automation (RPA) Analysis, Quality Control (QC), Project Management. This training has equipped me with 
                the necessary expertise to analyze business processes for automation opportunities, manage project costs effectively 
                through QC methodologies, and derive actionable insights from 
                data to support informed decision-making. I am eager to apply 
                these skills to contribute effectively to the bank's operations and drive innovation across various domains.</p>
            </div>
          </div>
          <div className="div33">
            <div>
              <h3>Education</h3>
              <h4 style={{ fontSize: '2em', color: '#555' }}>BACHELOR'S of Software Engineer</h4>
              <h5>2020 - 2024</h5>
              <p>Throughout my academic career, I took a variety of courses, but 
                the Java programming language course, Python 
                language, and Web Developer were some of the most crucial 
                ones. In addition, I received courses in software development, 
                software testing, systems analysis and design, software 
                architecture, and software modeling.</p>
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Resume;
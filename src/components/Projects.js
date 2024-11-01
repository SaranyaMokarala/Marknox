import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Image Caption Generation</h3>
          <p>Generates captions using CNN and LSTM.</p>
        </div>
        <div className="project-card">
          <h3>Tree Health Prediction</h3>
          <p>Built using CNN with a Django frontend (IBM internship).</p>
        </div>
        <div className="project-card">
          <h3>Web-Based Bus Tracker</h3>
          <p>Real-time location tracking for employee buses (SMAL internship).</p>
        </div>
        <div className="project-card">
          <h3>Customer Behavior Analysis</h3>
          <p>Data visualization in dashboard format.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

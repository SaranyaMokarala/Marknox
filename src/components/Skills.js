import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>C/C++</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Django</li> 
            <li>SvelteKIT</li>
            <li>Express</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

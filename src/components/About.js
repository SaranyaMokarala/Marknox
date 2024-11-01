import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>ABOUT</h2>
      <div className="about-content">
        <div className="education">
          <h3>Education</h3>
          <p>B.Tech in Computer Science Engineering (2021-2025) with specialization in AI & ML<br />
          Sri Sri University, Bidyadharpur, Cuttack, Odisha 754006</p>
          <p>Higher Secondary Education (2019-2021)<br />
          Sri Viswa Junior College, Visakhapatnam, Andhra Pradesh</p>
          <p>Secondary Education (2019)<br />
          Sri Chaitanya School, Visakhapatnam, Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}

export default About;

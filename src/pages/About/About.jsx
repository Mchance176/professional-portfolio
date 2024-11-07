import React from 'react'
import './About.css'
import profileImage from '../../assets/profile-image.jpg'

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="intro-section">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Matthew Chance" 
              className="profile-image"
            />
          </div>
          
          <div className="bio-section">
            <h3>About Me</h3>
            <p>
              Hello! I'm a passionate Full Stack Web Developer with a strong foundation in both front-end
              and back-end technologies. Recently graduated with a Certificate in Full Stack Web
              Development from the University of Central Florida, I specialize in creating clean, efficient code
              while ensuring exceptional user experiences.
            </p>

            <p>
              My expertise includes HTML, CSS, JavaScript, React, Node.js, and various database technologies.
              I am committed to fostering strong relationships, delivering exceptional service, and going the
              extra mile to engage personally with clients and secure future opportunities.
            </p>

            <p>
              What sets me apart is my combination of technical skills and strong interpersonal abilities.
              I excel in relationship building, active listening, and effective communication. My commitment
              to high standards of quality ensures that every project not only meets technical requirements
              but also exceeds user expectations.
            </p>

            <p>
              Currently pursuing a Bachelor's Degree in Interdisciplinary Studies at Liberty University,
              I bring a unique perspective to problem-solving and project development. I'm always eager
              to take on new challenges and contribute to innovative web solutions.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills & Expertise</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Technical Skills</h4>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Development Tools</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Command Line</li>
                <li>npm</li>
                <li>Heroku</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Professional Skills</h4>
              <ul>
                <li>Relationship Building</li>
                <li>Active Listening</li>
                <li>Time Management</li>
                <li>Written Communication</li>
                <li>Verbal Communication</li>
                <li>Customer Service</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
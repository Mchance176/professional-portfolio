import React from 'react'
import './Resume.css'

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      
      {/* Centered Resume Button */}
      <div className="resume-view-section">
        <a 
          href="https://drive.google.com/file/d/1qwSz6z6Y6Xlg-gkOJhW7v4terbaZb2OK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="view-resume-btn"
        >
          View Resume
        </a>
      </div>

      {/* Skills section */}
      <div className="skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Front-End</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Back-End</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Tools & Platforms</h4>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Command Line</li>
              <li>Heroku</li>
              <li>npm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
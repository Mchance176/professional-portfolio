// Import styles
import './About.css'

function About() {
  return (
    <section className="about">
      {/* Profile image section */}
      <div className="profile-image-container">
        <img 
          src="/path-to-your-image.jpg"  // Update with your image path
          alt="Matthew Chance" 
          className="profile-image"
        />
      </div>

      {/* Content section */}
      <div className="about-content">
        <h2>About Me</h2>
        
        <p className="intro">
          Hello! I'm Matthew Chance, a full-stack web developer passionate about 
          creating responsive and user-friendly applications.
        </p>

        <p className="background">
          I specialize in building modern web applications using technologies 
          like React, Node.js, Express, and MongoDB.
        </p>

        {/* Skills section */}
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Frontend: React, HTML5, CSS3, JavaScript</li>
            <li>Backend: Node.js, Express, MongoDB</li>
            <li>Tools: Git, GitHub, VS Code</li>
            <li>Other: Responsive Design, RESTful APIs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About 
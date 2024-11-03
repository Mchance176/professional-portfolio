// Import necessary styles
import './About.css'

function About() {
  return (
    // Main section container for About page
    <section className="about">
      {/* Profile image container */}
      <div className="profile-image-container">
        <img 
          src="/path-to-your-image.jpg" // Add your actual image path here
          alt="Matthew Chance" 
          className="profile-image"
        />
      </div>

      {/* About content container */}
      <div className="about-content">
        {/* Page title */}
        <h2>About Me</h2>
        
        {/* Professional introduction */}
        <p className="intro">
          Hello! I'm Matthew Chance, a full-stack web developer passionate about 
          creating responsive and user-friendly applications. With expertise in React, 
          JavaScript, and modern web technologies, I focus on building 
          efficient and scalable solutions.
        </p>

        {/* Professional background/skills */}
        <p className="background">
          I specialize in building modern web applications using technologies 
          like HTML, CSS, JavaScript, React, Node.js, Express. My journey in web development 
          has equipped me with both front-end and back-end expertise, allowing me 
          to create comprehensive full-stack solutions.
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
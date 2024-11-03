// Import necessary styles
import './About.css'

function About() {
  return (
    // Main section container for About page
    <section className="about">
      {/* Profile image container */}
      <div className="profile-image-container">
        <img 
          src="your-profile-image.jpg" // Replace with your actual image path
          alt="Professional headshot" 
          className="profile-image"
        />
      </div>

      {/* About content container */}
      <div className="about-content">
        {/* Page title */}
        <h2>About Me</h2>
        
        {/* Professional introduction */}
        <p className="intro">
          Hello! I'm [Matthew Chance], a full-stack web developer passionate about 
          creating responsive and user-friendly applications. With expertise in React, 
          JavaScript, and modern web technologies, I focus on building 
          efficient and scalable solutions.
        </p>

        {/* Professional background/skills */}
        <p className="background">
          With a background in [Your Background], I specialize in building 
          modern web applications using technologies like React, Node.js, 
          and [Other Technologies].
        </p>

        {/* Personal interests/additional info */}
        <p className="personal">
          When I'm not coding, you can find me [Your Interests/Hobbies].
          I'm always eager to learn new technologies and take on challenging projects.
        </p>
      </div>
    </section>
  )
}

// Export About component for use in App.jsx
export default About
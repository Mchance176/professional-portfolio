import './About.css'
import profileImage from '../../assets/profile-image.jpg' 

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="profile-section">
          <img
            src={profileImage}
            alt="Matthew Chance"
            className="profile-image"
          />
          <h2>Matthew Chance</h2>
          <p className="title">Full Stack Web Developer</p>
        </div>

        <div className="bio-section">
          <h3>About Me</h3>
          <p>
            Hello! I'm a passionate Full Stack Web Developer with a strong
            foundation in both front-end and back-end development. My journey
            in web development began with [your background/story], and I've
            since developed expertise in creating responsive, user-friendly
            applications.
          </p>

          <p>
            I specialize in JavaScript, React, Node.js, and [other key technologies].
            My approach to development focuses on writing clean, efficient code
            while ensuring an exceptional user experience.
          </p>

          <div className="skills-overview">
            <h3>Core Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>Tools & Methods</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>RESTful APIs</li>
                  <li>Agile Development</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
// Import styles
import './About.css'
// Import your profile image
import profileImage from '../../assets/profile-image.jpg' // You'll need to add your image to this path

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
                        Hello! I'm Matthew Chance, a passionate Full Stack Web Developer with a strong
                        foundation in both front-end and back-end development. My journey in web
                        development began with my studies in Full Stack Web Development at the University of Central Florida, and
                        I've since developed expertise in creating responsive, user-friendly applications.
                    </p>

                    <p>
                        I specialize in JavaScript, React, Node.js, and other key technologies. My approach
                        to development focuses on writing clean, efficient code while ensuring an exceptional
                        user experience.
                    </p>

                    <p>
                        As a professional dedicated to fostering strong relationships and delivering exceptional
                        service, I have demonstrated the ability to engage with clients and colleagues
                        meaningfully. My proactive approach ensures client satisfaction and anticipates future
                        needs, supported by my active listening skills that help resolve inquiries by
                        understanding and addressing specific requirements effectively.
                    </p>

                    <p>
                        Recognized for my persuasion and negotiation abilities, I've achieved a high success
                        rate in closing sales, with many clients choosing to maintain long-term relationships.
                        My commitment to time management ensures the successful prioritization and timely
                        completion of tasks, meeting both quarterly and yearly deadlines which contribute to
                        showcasing company success and identifying areas for improvement.
                    </p>

                    <p>
                        With excellent written and verbal communication skills, I prioritize transparent
                        communication to ensure mutual understanding and satisfaction with customers. Dedicated
                        to outstanding customer service and upholding high standards of quality, I am committed to
                        going the extra mile to engage personally with clients and secure future sales for the company.
                    </p>
                </div>

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
    </section >
  )
}

export default About 
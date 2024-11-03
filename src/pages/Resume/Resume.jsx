import './Resume.css'

function Resume() {
    // Define your skills
    const skills = {
        frontend: [
            "HTML5", "CSS3", "JavaScript",
            "React", "Bootstrap", "Responsive Design"
        ],
        backend: [
            "Node.js", "Express", "MongoDB",
            "MySQL", "RESTful APIs", "GraphQL"
        ],
        tools: [
            "Git", "GitHub", "VS Code",
            "npm", "Webpack", "Command Line"
        ]
    }

    return (
        <section className="resume">
            <h2>Resume</h2>

            {/* Download button */}
            <div className="download-section">
                <a
                    href="/path-to-your-resume.pdf"
                    download
                    className="download-btn"
                >
                    Download Resume (PDF)
                </a>
            </div>

            {/* Skills section */}
            <div className="skills-section">
                <h3>Technical Skills</h3>

                <div className="skills-grid">
                    {/* Frontend skills */}
                    <div className="skill-category">
                        <h4>Frontend Development</h4>
                        <ul>
                            {skills.frontend.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend skills */}
                    <div className="skill-category">
                        <h4>Backend Development</h4>
                        <ul>
                            {skills.backend.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Development tools */}
                    <div className="skill-category">
                        <h4>Development Tools</h4>
                        <ul>
                            {skills.tools.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Experience section */}
            <div className="experience-section">
                <h3>Professional Experience</h3>

                <div className="experience-item">
                    <h4>Job Title</h4>
                    <p className="company">Company Name</p>
                    <p className="date">Month Year - Present</p>
                    <ul>
                        <li>Achievement or responsibility 1</li>
                        <li>Achievement or responsibility 2</li>
                        <li>Achievement or responsibility 3</li>
                    </ul>
                </div>

                {/* Add more experience items as needed */}
            </div>

            {/* Education section */}
            <div className="education-section">
                <h3>Education</h3>

                <div className="education-item">
                    <h4>Degree Name</h4>
                    <p className="school">School Name</p>
                    <p className="date">Graduation Year</p>
                    <p>Relevant coursework or achievements</p>
                </div>
            </div>
        </section>
    )
}

export default Resume
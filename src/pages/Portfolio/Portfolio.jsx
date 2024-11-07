import './Portfolio.css'
import projectImage from '../../assets/projects/Screenshot.png' 
import projectImage2 from '../../assets/projects/Screenshot-lightning.png' 

function Portfolio() {
    const projects = [
        {
            title: "Training App/Avatar Virtual Training Dynamics",
            description: "A comprehensive workout tracking application that helps users monitor their fitness progress. Features include workout logging, progress visualization, and personalized training plans.",
            image: projectImage,  // Using the imported image
            technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "Web APIs"],
            githubLink: "https://github.com/IsakTL/training-app.git",
            deployedLink: "https://isaktl.github.io/training-app/"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that shows current and 5-day forecast for any city.",
            image: projectImage2,
            technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
            githubLink: "#", // Add your GitHub link
            deployedLink: "#" // Add your deployed link
        },
        {
            title: "Salary Tracker",
            description: "A simple way to track employees pay.",
            image: "https://via.placeholder.com/400x200?text=Work+Day+Scheduler",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            githubLink: "https:github.com/Mchance176/Salary--Tracker",
            deployedLink: "#" // Add your deployed link
        },
        {
            title: "Note Taker",
            description: "An application to write and save notes.",
            image: "https://via.placeholder.com/400x200?text=Note+Taker",
            technologies: ["HTML", "CSS", "JavaScript", "Express.js"],
            githubLink: "#", // Add your GitHub link
            deployedLink: "#" // Add your deployed link
        },
        {
            title: "Team Profile Generator",
            description: "A Node.js application that generates an HTML webpage displaying team member information.",
            image: "https://via.placeholder.com/400x200?text=Team+Profile+Generator",
            technologies: ["Node.js", "JavaScript", "Jest", "Inquirer"],
            githubLink: "#", // Add your GitHub link
            deployedLink: "#" // Add your deployed link
        },
        {
            title: "E-commerce Back End",
            description: "A back-end application for an e-commerce site using Express.js and Sequelize.",
            image: "https://via.placeholder.com/400x200?text=E-commerce+Back+End",
            technologies: ["Node.js", "Express.js", "MySQL", "Sequelize"],
            githubLink: "#", // Add your GitHub link
            deployedLink: "#" // Add your deployed link
        }

        // Add more as you complete them
    ]

    return (
        <section className="portfolio">
            <h2>My Portfolio</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.githubLink !== "#" && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <i className="fab fa-github"></i> GitHub
                                        </a>
                                    )}
                                    {project.deployedLink !== "#" && (
                                        <a
                                            href={project.deployedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
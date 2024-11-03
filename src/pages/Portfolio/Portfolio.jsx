import './Portfolio.css'

function Portfolio() {
    // Array of projects
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            image: "/path-to-image1.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/yourusername/project1",
            deployedLink: "https://project1.example.com"
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            image: "/path-to-image2.jpg",
            technologies: ["React", "Express", "MySQL"],
            githubLink: "https://github.com/yourusername/project2",
            deployedLink: "https://project2.example.com"
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            image: "/path-to-image3.jpg",
            technologies: ["React", "Express", "MySQL"],
            githubLink: "https://github.com/yourusername/project3",
            deployedLink: "https://project3.example.com"
        },
        {
            title: "Project 4",
            description: "Description of project 4",
            image: "/path-to-image4.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/yourusername/project4",
            deployedLink: "https://project4.example.com"
        },
        {
            title: "Project 5",
            description: "Description of project 5",
            image: "/path-to-image5.jpg",
            technologies: ["React", "Express", "MySQL"],
            githubLink: "https://github.com/yourusername/project5",
            deployedLink: "https://project5.example.com"
        },
        {
            title: "Project 6",
            description: "Description of project 6",
            image: "/path-to-image6.jpg",
            technologies: ["React", "Express", "MySQL"],
            githubLink: "https://github.com/yourusername/project6",
            deployedLink: "https://project6.example.com"
        }
    ]

    return (
        <section className="portfolio">
            <h2>My Portfolio</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* Project image */}
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        {/* Project details */}
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {/* Technologies used */}
                            <div className="technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project links */}
                            <div className="project-links">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href={project.deployedLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio 
import './index.scss'
import projects from '../../projects'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="text-zone">
                    <h2 className="title">Mes derniers projets</h2>
                    <p>Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.</p>
                </div>
          
                <div className="projects">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-technology">{project.technology}</span>
                                <p className="project-description"> Description : <br /><br />{project.description}</p>
                                <p className="project-problematique"> <h4> Problématique : </h4> {project.problematique}</p>
                                <a href={project.link} className="link-button">Voir </a>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};


export default Portfolio;
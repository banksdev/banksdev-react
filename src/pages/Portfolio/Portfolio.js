import Project from '../../components/Project/Project'
import './Portfolio.scss'
import { softwareProjects, securityProjects } from '../../resources/projects/projects';

function toProject(p) {
    return <Project title={p.title} keywords={p.keywords} description={p.description} image={p.image} link={p.link} />
}

function Portfolio(props) {
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="title">My Projects</h1>

            <div className="portfolio-projects">
                <div className="software-projects">
                    <h3 className="project-category-title">Software Development Projects</h3>
                    <div className="project-list">
                        {
                            softwareProjects.length > 0
                            ? softwareProjects.map(p => toProject(p))
                            : <p style={{color: "white"}}>TBA</p>
                        }
                    </div>
                </div>

                <div className="security-projects">
                    <h3 className="project-category-title">Cyber Security Projects</h3>
                    <div className="project-list">
                        {
                            securityProjects.length > 0 
                                ? securityProjects.map(p => toProject(p))
                                : <p style={{color: "white"}}>TBA</p>
                        }
                    </div>
                </div>
            </div>

                
        </div>
    )
}

export default Portfolio;
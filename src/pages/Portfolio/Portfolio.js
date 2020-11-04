import Project from '../../components/Project/Project'
import './Portfolio.scss'
import { softwareProjects, securityProjects } from '../../resources/projects/projects';

function toProject(p) {
    return <Project title={p.title} keywords={p.keywords} description={p.description} image={p.image} />
}

function Portfolio(props) {
    return (
        <div className="portfolio" id="portfolio">

            <div className="software-projects">
                <h3 className="project-category-title">Software Development Projects</h3>
                <div className="project-list">
                    {softwareProjects.map(p => toProject(p))}
                </div>
            </div>

            <div className="security-projects">
                <h3 className="project-category-title">Cyber Security Projects</h3>
                <div className="project-list">
                    {securityProjects.map(p => toProject(p))}
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;
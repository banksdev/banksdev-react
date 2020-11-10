import './FullProject.scss';

function FullProject(props) {
    return (
        <div className="full-project">
            
            <div className="project-contents">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <p className="project-keywords"><b>Keywords:</b> {props.keywords.join(", ")}</p>

                <a href={"" + props.link}>Check out the project here</a>

            
            </div>

            <div className="cover-image-container">
                <img src={props.image} alt="" className="cover-image"/>
            </div>


        </div>
    )
}

export default FullProject;
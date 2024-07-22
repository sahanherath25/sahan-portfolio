import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({title, description, image, link}) => {
    return (

        <div className={"col-md-4"}>
            <div className="project-item position-relative ">
                <img src={image}></img>
                <div className="overlay"></div>
                <div className="project-content ">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link className={"btn btn-outline-light"} to={link}>View Project</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
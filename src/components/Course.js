import React from "react";
import {Link} from "react-router-dom";

const Course = ({title, url, link}) => {
    return (
        <div className={"col-md-4"}>
            <div className="position-relative course-item ">
                <img src={url} alt="" className={"w-100"}/>
                <div className="course-content w-100 ">
                    <h3>{title}</h3>
                    <button className={"btn btn-primary"}>Go To</button>
                </div>
            </div>
        </div>
    )
}

export default Course
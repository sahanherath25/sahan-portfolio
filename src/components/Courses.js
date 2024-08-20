import React, {useEffect} from "react";
import devData from "../data/dev-data-courses.json"
import Course from "./Course";


const CoursesList = () => {

    useEffect(() => {
        console.log(devData)
    }, [])

    return (
        <div className={"container  main-wrapper"}>

            <h2>My Courses </h2>

            <hr/>

            <div className={"courses-section-wrapper row"}>
                {
                    devData.map(({title, link, image}) => {
                        return (
                            <Course title={title} link={link} url={image}/>
                        )
                    })
                }
            </div>


        </div>

    )
}

export default CoursesList
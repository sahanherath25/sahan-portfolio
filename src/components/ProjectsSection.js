import React, {useEffect, useState} from "react";
import ProjectItem from "./ProjectItem";
import  jsonData  from "../data/dev-data.json"


const ProjectsSection=()=>{

    const [data,setData]=useState([]);

    useEffect( ()=>{
         setData(jsonData)
        console.log("DATA ",data)
    },[])

    return(
        <div className={"container projects-list"}>
            <h3 className={"font bold "}>Take Look At My Projects</h3>
            <hr/>
            <div className="row">
                {
                    data.map(({title,image,description,link})=>{
                        return <ProjectItem  title={title} image={image} description={description} link={link}/>
                    })
                }
            </div>



        </div>
    )
}

export default ProjectsSection
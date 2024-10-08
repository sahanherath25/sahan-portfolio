import React from "react";
import Header from "../components/Header";
import {FaLaptopCode} from "react-icons/fa";
import ProjectsSection from "../components/ProjectsSection";

const Projects = () => {
    return (
        <div className={"main-wrapper"} >
            <Header/>
            <h1 >Projects</h1>

            <div className="container projects-intro">
                <div className="row flex-with-center mt-5">
                    <div className="col-md-6 n-box-2 p-3 left-container py-5">
                        <h1 className={"font bold"}>Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            animi consectetur, consequatur dignissimos magni minus porro quisquam quos ut voluptate.
                        </p>

                        <button className={"primary-button btn-lg"}>Get Started </button>
                    </div>
                    <div className="col-md-6 position-relative right-container">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#001D33" d="M42.8,-74.4C54,-67.5,60.9,-53.3,67.4,-39.7C73.9,-26.1,80.1,-13,82.7,1.5C85.3,16.1,84.4,32.1,76.9,44.1C69.5,56,55.4,63.9,41.5,69.6C27.6,75.4,13.8,79,0.1,78.8C-13.5,78.6,-27.1,74.5,-39.7,68C-52.4,61.5,-64.1,52.7,-71.5,40.9C-78.9,29.2,-82,14.6,-81.1,0.5C-80.3,-13.6,-75.6,-27.3,-68.1,-38.8C-60.6,-50.4,-50.3,-59.9,-38.5,-66.4C-26.7,-73,-13.4,-76.5,1.2,-78.6C15.7,-80.7,31.5,-81.2,42.8,-74.4Z" transform="translate(100 100)" />
                        </svg>

                        <FaLaptopCode
                            color={"#fff"}
                            size={"180"}
                            className={"position-absolute top-50 start-50 translate-middle"} />

                    </div>
                </div>

            </div>

            <ProjectsSection/>


        </div>
    )
}

export default Projects
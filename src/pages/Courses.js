import React from "react";
import Header from "../components/Header";
import background from "../assets/images/blob-projects.svg";
import Button from "bootstrap/js/src/button";

const Courses = () => {
    return (
        <div className={"courses courses-wrapper"} style={
            {
                backgroundImage: `url(${background})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }>
            <Header/>

            <div className="content-wrapper">

                <h1 className={"h1-text"} style={{textAlign: "center", color: "#fff"}}>Courses Page</h1>

                <div className="text-wrapper">

                    <p className={"para"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dignissimos distinctio dolorum eius
                        esse expedita, facere, iusto labore magnam magni nisi nulla omnis possimus provident quas quos suscipit
                        voluptatem voluptates. Accusantium distinctio ea est eum id, inventore iste, omnis, quaerat sequi ut
                        velit veniam voluptate. At blanditiis consequatur laboriosam rerum.
                    </p>

                    <button className="primary-button btn">Click Here</button>
                </div>

            </div>


        </div>
    )
}

export default Courses
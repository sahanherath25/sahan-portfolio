import React from "react";

const Skills = () => {
    return (
        <div className={"skills-container container"}>

            <div className="row pt-5 justify-content-start " data-aos={"fade-up"}>
                <div className="col-md-4 ">
                    <div className="n-box-2 px-3 py-5">
                        <h2>Yes you're Right</h2>
                        <p>Im a JavaScript Expert</p>
                    </div>
                </div>
            </div>
            <div className="row pt-5 justify-content-center" data-aos={"flip-up"}>
                <div className="col-md-4">
                    <img src={"https://static.vecteezy.com/system/resources/thumbnails/028/735/086/original/diverse-multi-ethnic-team-in-office-indian-female-and-black-male-it-programmers-working-on-desktop-computer-specialists-creating-software-engineers-developing-app-program-shifting-rack-focus-free-video.jpg"} alt="svg icon" height={200} className={"w-100"}/>
                </div>
            </div>
            <div className="row pt-5 justify-content-end" data-aos={"fade-down"}>
                <div className="col-md-4 ">
                    <div className="n-box-2 px-3 py-5">
                        <p className={"bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia, praesentium? Animi
                            architecto deserunt dignissimos distinctio doloribus facilis, nulla odio optio quisquam,
                            repudiandae suscipit totam!
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
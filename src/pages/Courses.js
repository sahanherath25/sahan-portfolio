import Header from "../components/Header";
import background from "../assets/images/blob-projects.svg";
import CoursesList from "../components/Courses";


const Courses = () => {




    return (

        <div className={"parent-wrapper"}>

            <div className={"courses courses-wrapper"} style={
                {
                    backgroundImage: `url(${background})`,
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
            <div className={"why-sahan-wrapper flex-with-center a"}>
                <div className="why-sahan  flex-with-center n-box1">
                    <h2>WHY Sahan ?</h2>
                    <div className="hidden-container">
                        <p>Skilled in React & JavaScript</p>
                        <p>Experience with Docker & Git</p>
                        <p>Proven Frontend  Web Development</p>
                        <h3>Problem-Solver</h3>
                    </div>
                </div>

            </div>


            <CoursesList />

            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001220" fill-opacity="1"
                          d="M0,64L30,101.3C60,139,120,213,180,213.3C240,213,300,139,360,133.3C420,128,480,192,540,181.3C600,171,660,85,720,53.3C780,21,840,43,900,85.3C960,128,1020,192,1080,218.7C1140,245,1200,235,1260,229.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>

        </div>




)
}

export default Courses
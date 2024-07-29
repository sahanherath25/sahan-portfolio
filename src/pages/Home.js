import React, {useEffect, useRef} from "react";
import Header from "../components/Header";
import CarouselCards from "../components/CarouselCards";
import Hero from "../components/Hero";
import Wave from "../components/Wave";
import initAOS from "../aos/aos";
import initAOS from "../aos/aos";
import Skills from "../components/Skills";
import blobImage from "../assets/images/blob-home.svg"


const Home=()=>{

    const heroRef = useRef(null);
    const getStart = () => {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(()=>{

        initAOS();

    },[])

    return(
        <div className={"home-container"} style={
            {
                backgroundImage:`url({${blobImage})`,
                backgroundSize:"cover",
                height:"100vh",
                backgroundRepeat:"no-repeat"
            }
        }>
            <Header/>
            <div className="introduction flex-with-center  " style={{backgroundImage:`url('images/circle-scatter-haikei2.svg')`}}>
               <div className="overlay">
               </div>
                <div className={"inner-wrapper"}>
                   <h1>Sahan</h1>
                   <div className="intro-content d-flex justify-content-between">
                       <p>Frontend <br/>Developer </p>
                       <button onClick={getStart} className={"primary-button btn-lg bold "}>Get Started</button>
                   </div>
               </div>
            </div>
            {/*<Carousel/>*/}
            <CarouselCards/>
            <Hero ref={heroRef}  dataAOS={"fade-up "}  dataAOS2={"zoom-in-up"} />
            <Wave dataAOS={"zoom-in "} />
            <Skills/>
        </div>

    )
}

export default Home
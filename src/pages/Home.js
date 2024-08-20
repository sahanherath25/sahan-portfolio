import React, {useEffect, useRef} from "react";
import Header from "../components/Header";
import CarouselCards from "../components/CarouselCards";
import Hero from "../components/Hero";
import Wave from "../components/Wave";
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
        console.log("HELLO SAHABN")
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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#001220" fill-opacity="1" d="M0,192L21.8,181.3C43.6,171,87,149,131,160C174.5,171,218,213,262,192C305.5,171,349,85,393,58.7C436.4,32,480,64,524,96C567.3,128,611,160,655,192C698.2,224,742,256,785,250.7C829.1,245,873,203,916,202.7C960,203,1004,245,1047,229.3C1090.9,213,1135,139,1178,90.7C1221.8,43,1265,21,1309,26.7C1352.7,32,1396,64,1418,80L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
            </svg>

        </div>

    )
}

export default Home
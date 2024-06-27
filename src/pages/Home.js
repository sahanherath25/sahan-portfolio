import React, {useRef} from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CarouselCards from "../components/CarouselCards";
import Hero from "../components/Hero";
import Wave from "../components/Wave";

const Home=()=>{

    const heroRef = useRef(null);

    const getStart = () => {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className={"home-container"}>
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
            <Hero ref={heroRef}/>
            <Wave/>

        </div>

    )
}

export default Home
import React from "react";


const Home=()=>{
    return(
        <div className={"home-container"}>
            <div className="introduction flex-with-center  " style={{backgroundImage:`url('images/circle-scatter-haikei2.svg')`}}>
               <div className="overlay">

               </div>
                <div>
                   <h1>Sahan</h1>
                   <div className="intro-content d-flex justify-content-between">
                       <p>Frontend <br/>Developer </p>
                       <button onClick={()=>alert("Clicked")} className={"primary-button btn-lg bold w-50"}>Get Started</button>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Home
import React from "react";
import  contactImage   from "../assets/images/contact.jpg"

const Form = () => {
    return (
        <div className={"container form-wrapper mt-5"}>
            <div className="row  ">
                <div className="col-md-6 left-side">
                    <picture>
                        <source
                            srcSet={contactImage}
                            media="(max-width:991px )"/>
                        <source
                            // srcSet="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                            srcSet={contactImage}
                            media="(min-width: 992px) and (max-width: 1919px)"/>
                        <source
                            srcSet={contactImage}
                            media="(min-width:1920px)"/>
                        <img src="images/sahan.jpg" alt="Default Image"/>
                    </picture>
                </div>

                <div className="col-md-6 right-side   n-box-2">
                    <h1 className={"h1-title form-title text-center"}>Contact Me</h1>
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-12">
                                <input type="text" className={"form-control  "} placeholder={"Your Name"}/>
                            </div>
                            <div className="col-md-12">
                                <input type="text" className={"form-control "} placeholder={"Your Email"}/>
                            </div>
                            <div className="col-md-12">
                                <input type="text" className={"form-control "} placeholder={"Share Your Thoughts"}/>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className={"primary-button submit-btn "}>Submit</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
import React from "react";
import Navbar from "../components/navbar";
import land from "../assets/land.png";
import "../style/landing_page.css";

const Landing = () => {
    return (    
        <div>
            <Navbar />
            <div className="land-content">
                <div className="land-content-left">
                    <div className="land-title">
                        <p className="share">Share</p>
                        <p className="save">Save</p>
                        <p className="sustain">Sustain</p>
                    </div> 
                    <div className="land-para">
                        <p>Join our community effort to reduce food waste, feed more, and let's make a difference together</p>
                    </div>
                    <a href="/"><button className="join-button">Join Us</button></a>
                </div>
                <div className="land-content-right">
                    <img className="land-image" src={land} alt=" " />
                </div>
            </div>
        </div>   
    )
}

export default Landing;

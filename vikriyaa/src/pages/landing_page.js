import React from "react";
import Navbar from "../components/navbar";
import landing from "../assets/bg.jpg"

const Landing = () => {
    return (    
        <div>
          <Navbar/>
            <div>
              <h1>Share</h1> <h1>Save</h1> <h1>Sustain</h1>
            </div>
          <img className="landing_img" src ={landing} alt="Image"/>
        </div>   
    )
}

export default Landing;
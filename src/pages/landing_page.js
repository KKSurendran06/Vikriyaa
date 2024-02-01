import React from "react";
import Navbar from "../components/navbar";
import land from "../assets/land.png";
import "../style/landing_page.css";

const Landing = () => {
    return (    
        <div>
            <Navbar />
            
            <div className="land-intro">
                <div className="land-intro-left">
                    <div className="land-intro-title">
                        <p className="share">Share</p>
                        <p className="save">Save</p>
                        <p className="sustain">Sustain</p>
                    </div> 
                    <div className="land-intro-para">
                        <p>Join our community effort to reduce food waste, feed more, and let's make a difference together</p>
                    </div>
                    <a href="/"><button className="join-button">Sign Up</button></a>
                </div>
                <div className="land-intro-right">
                    <img className="land-image" src={land} alt=" " />
                </div>
            </div>
            
            <div className="land-content-box">
                <p id="about">About vikriyaa</p>
                <p className="land-content">
                    At Vikriyaa, we embrace the transformative potential of surplus. Our vision is a world where no surplus goes overlooked, 
                    where each generous act sets in motion a ripple effect of positive change. With a dedicated commitment, 
                    our platform strives to cultivate a community that unites surplus donors with those in need. Vikriyaa is more than a platform; 
                    it is a catalyst for sustainable and impactful solutions to address food scarcity. By fostering connections and empowering individuals 
                    and businesses to share their surplus, we aspire to create a world where no resource goes to waste and every contribution makes a 
                    meaningful difference in combating hunger and promoting sustainability</p>

                <p id="mission">Our mission</p>
                <p className="land-content">
                At Vikriyaa, our mission is to seamlessly connect surplus resources with those who can benefit from them, creating a donation experience 
                that is not only effortless but also profoundly rewarding. We are committed to simplifying the surplus donation process, ensuring that 
                individuals, restaurants, and businesses can easily contribute to a positive cause. Through Vikriyaa, surplus transcends mere excess; 
                it becomes a catalyst for good, unlocking its full potential to address food scarcity and environmental concerns. By making surplus a 
                force for positive change, we aim to build a community where each donation creates a lasting impact, contributing to a more compassionate 
                and sustainable world.
                </p>

                <p id="join">Join us in makeing a difference</p>
                <p className="land-content">
                    Vikriyaa warmly welcomes you to embark on this collective journey towards a world where surplus emerges as a potent force for 
                    positive change. Regardless of whether you are a donor, a claimant seeking support, or a passionate advocate committed to reducing food 
                    waste, your active involvement is pivotal. Together, we can make a significant impact, fostering a community-driven movement that transforms 
                    surplus into a powerful instrument for positive social and environmental change. Join us at Vikriyaa and be a part of the impactful change we
                    envision for a better, more sustainable future</p>
                    <a href="/"><button className="join-button-bottom">Sign Up</button></a>    
            </div>
            <div className="footer">
                <p>© 2024 Vikriyaa All rights reserved.</p>
            </div>

        </div>   
    )
}

export default Landing;

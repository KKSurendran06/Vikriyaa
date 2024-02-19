import React, { useState }  from "react";
import "../style/signup_page.css"
import asset from "../assets/login.png"
import Navbar from "../components/navbar"

const Signup = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <Navbar/>
            <div className="container-box">
                <div className="container-box-left">
                    <img className='asset' src={asset} alt=' '/>
                </div>
                <div className="container-box-right">
                        <div className="register-card-content">
                            <h1 className="register">Register</h1>
                            <form >
                                <div className="email-box">
                                   
                                    <label className="form_label">Email</label>
                                    <input className="form_input" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" 
                                    name="email" 
                                    />         
                                </div> 

                                <div className="username-box">
                                    <label className="form_label">Username</label>
                                    <input className="form_input" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text" 
                                    name="username" 
                                    />
                                </div>        
                                <div className="password-box">   
                                    <label className="form_label">Password</label>
                                    <input className="form_input" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" 
                                    name="password" 
                                    />
                                </div>                     
                                <button className="signup-button" type="submit">Create a new account</button>
                                <div className="or-box">
                                    <hr className="line"/>
                                        <p className="or-text">or</p>
                                    <hr className="line"/>
                                </div>
                            </form>
                            <a href="/signin"><button className="signin-button" >Login to your account</button> </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
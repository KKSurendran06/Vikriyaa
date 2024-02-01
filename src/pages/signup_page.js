import React  from "react";
import { useForm } from 'react-hook-form';
import "../style/signup_page.css"
import asset from "../assets/login.png"
import Navbar from "../components/navbar"

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="form_label">Username</label>
                                    <input className="form_input" 
                                    type="text" 
                                    name="username" 
                                    {...register("username", {
                                            required: "Username is required."
                                            }
                                        )}/>
                                    {errors.username && <p className="errMsg">{errors.username.message}</p>}
                                </div>    
                                <div>
                                    <label className="form_label">Email</label>
                                    <input className="form_input" 
                                    type="text" 
                                    name="email" 
                                    {...register("email", 
                                    {required: "Email is required.", 
                                    pattern: { 
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, 
                                        message: "Enter a valid email." 
                                        }
                                      })}
                                    />
                                    {errors.email && <p className="errMsg">{errors.email.message}</p>}
                                </div>     
                                <div>   
                                    <label className="form_label">Password</label>
                                    <input className="form_input" 
                                    type="password" 
                                    name="password" 
                                    {...register("password", 
                                    {required: "Password is required", 
                                    minLength: {
                                        value:8, 
                                        message: "Password must be 8 characters"
                                        } 
                                      })}
                                    />
                                    {errors.password && <p className="errMsg">{errors.password.message}</p>}
                                </div>    
                                <div className="buttons">
                                    <button type="submit">Create a new account</button>
                                    <button>Login in to your account</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
import React, { useState } from 'react';
import { validPassword, validEmail } from './regex.js';
import {Link} from 'react-router-dom';

import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    // console.log(email, password)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation
        if (!validEmail.test(email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        if (!validPassword.test(password)) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }

        if(!emailErr && !passErr){
            try{
                const response = await axios.post("http://localhost:3005/plugins/login", {
                    email, 
                    password
                })
                console.log(response.data);
                console.log("Login successfull");
                localStorage.setItem("Users", JSON.stringify(response.data.user));
                setTimeout(()=>{
                    navigate("/");
                    window.location.reload();
                }, 2000)
            }
            catch(error){
                console.log(error);
            }
        }

    };

    return (
        <div className="flex justify-center my-24">
            <form className="flex flex-col w-96 gap-4" onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="px-4 py-2 border-slate-400 border-2 border-solid rounded-md"
                />
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="pass1"
                    id="pass1"
                    className="px-4 py-2 border-slate-400 border-2 border-solid rounded-md"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md"
                />
                <p className='text-center'>Do not have an account ?</p>

                <Link to='/signup' className='bg-indigo-600 text-white text-center px-4 py-2 rounded-md'>Signup</Link>

                {emailErr && <h1 className="text-red-500 font-semibold">Email is invalid</h1>}
                {passErr && <h1 className="text-red-500 font-semibold">Password is invalid</h1>}
            </form>
        </div>
    );
};

export default Login;

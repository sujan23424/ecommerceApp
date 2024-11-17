import React, {useState} from 'react';

import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate, Link} from 'react-router-dom';

import {validPassword , validEmail} from './regex.js';

function Signup(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [passErr, setPassErr] = useState(false);
    const [emailErr , setEmailErr] = useState(false);
    const [matchPassErr, setMatchPassErr] = useState(true)



    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log();

        if (!validEmail.test(email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        if(!validPassword.test(password)){
            setPassErr(true);
        }
        if(cpassword === password){
            setMatchPassErr(false)
        }

        if(!passErr && !matchPassErr){
            try{
                const response = await axios.post("http://localhost:3005/plugins/",
                   {
                    username,
                    email,
                    password
                   }
                );
                console.log(response.data);
                toast.success("Signup Successfully !");
                setUsername("");
                setEmail("");
                setPassword("");
                setCpassword("");

                localStorage.setItem("Users", JSON.stringify(response.data.user));
                setTimeout(()=>{
                    navigate('/');
                    window.location.reload();
                },2000);

            }
            catch(error){
                console.error("There was an error submitting the form !", error);
            }
        }
    }

    return (
        <div className='flex justify-center'>
            <form className='flex flex-col w-96 gap-4' onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type='text' 
                name='username'
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md'
                />
                <label>Email</label>
                <input type="email" 
                name='email'
                id='email'
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md'
                />
                {/* {emailErr && <h1 className="text-red-500 font-semibold">Email is invalid</h1>} */}
                <label htmlFor="">Password</label>
                <input type="password" name="pass1" id="pass1" 
                className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md'
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                {
                    passErr && <h1 className='text-red-500'>password should be at leat 6 characters and should have a digit and character !</h1>
                }
                <label>Confirm Password</label>
                <input type="password" name='pass2' id='pass2' 
                className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md'

                onChange={(e)=>{
                    setCpassword(e.target.value);
                }}
                />
                <input type="submit" value='Submit' className='px-4 py-2 bg-indigo-600 rounded-md text-white'/>
                <p className='text-center'>Already have an account ?</p>

                <Link to='/login' className='bg-indigo-600 text-white text-center px-4 py-2 rounded-md'>Login</Link>
                
            </form>
        </div>
    )
}

export default Signup;

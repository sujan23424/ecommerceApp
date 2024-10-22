import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Signup(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    return (
        <div className='flex justify-center'>
            <form className='flex flex-col w-96 gap-4'>
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
                <label htmlFor="">Password</label>
                <input type="password" name="pass1" id="pass1" 
                className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md'
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
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
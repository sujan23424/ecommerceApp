import React from 'react';
import {useAuth} from '../context/AuthProvider';
import {useNavigate} from 'react-router-dom';

export default function Logout(){
    const navigate = useNavigate();
    const [authUser, setAuthUser] = useAuth();


    const handleLogout = ()=>{
        try{
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            console.log("Logout Successfully");

            navigate("/login");
            window.location.reload();
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <button onClick={handleLogout} className='text-red-600'>Logout</button>
    )
}
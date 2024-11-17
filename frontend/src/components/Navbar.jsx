import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

import {useAuth} from '../context/AuthProvider.jsx';
import Logout from './Logout.jsx'



function Navbar() {

    const [authUser, setAuthUser] = useAuth();

    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        if (showMenu === true) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }


    return (
        <div className=''>
            <nav className='flex h-28 justify-between items-center px-14 lg:px-36 '>
                <h1 className='text-3xl font-semibold'>
                    <Link to='/'>WVANTAGE</Link>
                </h1>
                <ul className='text-lg gap-8 md:flex hidden lg:gap-16'>
                    <li>
                        <Link to='/themes'>Themes</Link>
                    </li>
                    <li>
                        <Link to='/plugins'>Plugins</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <ul className='hidden md:flex text-lg gap-8'>
                    <li>
                        {
                            authUser ? <Logout/> : <Link to='/signup'>Signup</Link>
                        }
                    </li>
                    <li>0.0</li>
                </ul>
                <div className='md:hidden flex'><IoIosMenu className='text-4xl' onClick={() => {
                    handleClick()
                }} /></div>
            </nav>


            {
                showMenu &&
                <nav className='absolute z-50 flex px-14 items-center lg:px-36'>
                    <ul className='flex flex-col gap-6 mb-8'>
                    <li>
                        <Link to='/themes'>Themes</Link>
                    </li>
                    <li>
                        <Link to='/plugins'>Plugins</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    </ul>
                </nav>
            }


        </div>
    )
}


export default Navbar;


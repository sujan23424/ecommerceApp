import { IoMenu } from "react-icons/io5";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import {useAuth} from '../context/AuthProvider';

export default function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    function handleClick(){
        if(showMenu===true){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
    }
    return <div className=''>
        <nav className='flex h-28 bg-slate-300 justify-between lg:px-36 px-14 items-center'>
            <h1><Link to="/" className='text-3xl font-semibold'>WVANTAGE</Link></h1>
            <ul className='md:flex hidden lg:gap-16 text-lg gap-8'>
                <li><Link to="/themes" className='hover:text-indigo-600'>Themes</Link></li>
                <li><Link to="/plugins" className='hover:text-indigo-600'>Plugins</Link></li>
                <li><Link to="/about" className='hover:text-indigo-600'>About</Link></li>
                <li><Link to="/contact" className='hover:text-indigo-600'>Contact</Link></li>
            </ul>
            <ul className='md:flex hidden lg:gap-16 text-lg gap-8'>
            {
                authUser ? <Logout/> : <li><a href="/signup" className='bg-indigo-600 text-white px-3 py-1 rounded-md text-center'>Sign up</a></li>
            }
            </ul>
            <div className='flex md:hidden'><IoMenu className='text-4xl' onClick={()=>{handleClick()}}/></div>
        </nav>
        {
            showMenu && <nav className='absolute z-50 flex bg-slate-300 justify-between lg:px-36 px-14 items-center w-full'>
            <ul className='flex flex-col gap-6 mb-8'>
                <li><Link to="/themes" className='hover:text-indigo-600'>Themes</Link></li>
                <li><Link to="plugins" className='hover:text-indigo-600'>Plugins</Link></li>
                <li><Link to="/about" className='hover:text-indigo-600'>About</Link></li>
                <li><Link to="/contact" className='hover:text-indigo-600'>Contact</Link></li>
                {
                authUser ? <Logout/> : <li><a href="/signup" className='bg-indigo-600 text-white px-3 py-1 rounded-md text-center'>Sign up</a></li>
            }
            </ul>
        </nav>
        }
    </div>
}
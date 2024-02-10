import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//NavLink is similar to Link, but it adds an extra attribute 'aria-current' to the anchor-tag, which can be further used to style active links

const Navbar = () => {
    return(
        <nav className='bg-yellow-200 w-full h-fit p-4 flex flex-row justify-between items-center'>
            <a class-name='text-black'>Header</a>
            <div className=''>
                <button className='m-4 py-1 px-2.5 rounded-lg bg-blue-400'><NavLink to='/' className='text-white'>Home</NavLink></button>
                <button className='m-4 py-1 px-2.5 rounded-lg bg-blue-400'><Link to='/about' className='text-white'>About</Link></button>
                <button className='m-4 py-1 px-2.5 rounded-lg bg-blue-400'><Link to='/contact' className='text-white'>Contact</Link></button>
            </div>
        </nav>
    )
}

export default Navbar;
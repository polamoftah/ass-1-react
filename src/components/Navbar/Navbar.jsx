import React from 'react'
import { Link, NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
   <nav className=' top-0 end-0 start-0 py-2 text-white bg-gray-700 h-20'>
    <div>
    <div className="container flex justify-between">
    <h2 className='ml-80 text-6xl font-bold'> <Link  to="/Startframe">Start Framework
    </Link></h2>
        <ul className='flex mt-4 '>
           
            <li><NavLink className="p-2 py-7 font-bold  " to="/About">About</NavLink></li>
            <li><NavLink className="p-2 py-7 font-bold "  to="/Portfolio">Portfolio</NavLink></li>
            <li><NavLink className="p-2 py-7 font-bold "  to="/Contact">contact</NavLink></li>
        </ul>
    </div>
    </div>
   </nav>
  )
}

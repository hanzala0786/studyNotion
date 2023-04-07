import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.svg';
function Navbar(props) {
  
  let isLogedIn = props.isLogedIn;
  let setIsLogedIn = props.setIsLogedIn;
  
  return (
    <div className='w-11/12 max-w-[1160px] flex justify-between items-center mx-auto py-4 text-richblack-100'>
        <Link to="/">
            <img src={Logo} alt=""
            width={160} height={32} loading='lazy' />
        </Link>

        {/* nav links */}
        <nav>
          <ul className='flex gap-x-6'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" >Contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* signin and signup btns btns */}
        <div className='flex gap-4'>
          { !isLogedIn &&
            <NavLink to="/Login" setIsLogedIn={setIsLogedIn}>
              <button className='bg-richblack-800 px-3 py-2 border rounded-md border-richblack-700 items-center'>
                Log in
              </button>
            </NavLink>
          }
          { !isLogedIn &&
            <NavLink to="/Signup" setIsLogedIn={setIsLogedIn}>
              <button className='bg-richblack-800 px-3 py-2 border rounded-md border-richblack-700 items-center'>
                Signup
              </button>
            </NavLink>
          }
          { isLogedIn &&
            <NavLink to="/">
              <button onClick={() => setIsLogedIn(false)} className='bg-richblack-800 px-3 py-2 border rounded-md border-richblack-700 items-center'>
                Log out
              </button>
            </NavLink>
          }
          { isLogedIn &&
            <NavLink to="/Dashboard">
              <button className='bg-richblack-800 px-3 py-2 border rounded-md border-richblack-700 items-center'>
                Dashboard
              </button>
            </NavLink>
          }
        </div>

    </div>
  )
}

export default Navbar
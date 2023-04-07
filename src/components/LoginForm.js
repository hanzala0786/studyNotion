import React from 'react'
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const LoginForm = ({setIsLogedIn}) => {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        email: "",
        password: ""
      });
    
      const [showPassword, setSowPassword] = useState(false);
    
      function changeHandler(event) {
        setFormData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value
        }));
      }

    
      function submitHandler(event) {
        event.preventDefault();
        setIsLogedIn(true);
        navigate("/Dashboard");
        toast.success("Welcome back");

      }
  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col gap-4 mt-6'>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email address<sup className='text-pink-200'>*</sup>
          </p>
          <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            type="email"
            name="email"
            onChange={changeHandler}
            value={FormData.email}
            placeholder="enter the email"
          />
        </label>

        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup>
          </p>
          <input className= " border  border-richblack-700  bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={changeHandler}
            value={FormData.password}
            placeholder="Enter the password"
          />

          <span onClick={() => setSowPassword((prev) => !prev)} className='absolute top-[38px] right-3 cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
             ( <AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>
          <Link to="#" className='w-full'>
            <p className='w-full ml-auto mt-1 text-xs text-blue-100'>Forgot password</p>
          </Link>
        </label>
        <button className='bg-yellow-50 rounded-[8px] p-[12px] font-medium text-richblack-900'>Sign in</button>
      </form>
    </div>
  )
}

export default LoginForm
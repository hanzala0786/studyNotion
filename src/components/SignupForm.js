import React from 'react'
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLogedIn}) => {
    const navigate = useNavigate();
  
    const [accountType, setAccountType] = useState("Student");
  
    const [FormData, setFormData] = useState({
        firstName:"", lastName:"", createPassword:"", confirmPassword:"", email:"" 
      })
      function changeHandler(event) {
        setFormData(prev => (
          {
            ...prev,
            [event.target.name] : event.target.value
          }
        ))
      }
      const [showPassword, setShowPassword] = useState(false);
      const [showPassword1, setShowPassword1] = useState(false);

      function submitHandler(event) {
        if(FormData.createPassword !== FormData.confirmPassword){
          toast.error("password does not matche");
        }
        else{
          event.preventDefault();
          setIsLogedIn(true);
          navigate("/Dashboard");
          toast.success("Account created successfully");
        }
      }
  return (
    <div>
      
      {/* students and instructor button */}
      <div className='bg-richblack-800 flex max-w-max gap-x-1 p-1 my-6 rounded-full'>
        <button className={`${accountType === "Student"? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} 
          py-2 px-5 rounded-full transition-all duration-200`} 
          onClick={() => setAccountType("Student")}>
          Student
        </button>
        <button className={`${accountType === "Instructor"? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
          py-2 px-5 rounded-full transition-all duration-200`} 
          onClick={() => setAccountType("Instructor")}>
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col gap-4 mt-6'>
        {/* first name and last name field */}
        <div className='w-full flex gap-x-4'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Frist Name<sup className='text-pink-200'>*</sup></p>
            <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name "
              value={FormData.firstName}
              />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-200'>*</sup></p>
            <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name "
              value={FormData.lastName}
              />
          </label>
        </div>
        {/* email field */}
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Email<sup className='text-pink-200'>*</sup></p>
            <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter email address "
              value={FormData.email}
              />
        </label>
        {/* create password and confirm password field */}
        <div className='w-full flex gap-x-4'>
          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create password<sup className='text-pink-200'>*</sup></p>
            <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
              required
              type={showPassword ? "text" : "password"}
              name="createPassword"
              onChange={changeHandler}
              placeholder="Enter password "
              value={FormData.password}
            />
            <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
               ( <AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
            </span>
          </label>

          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm password<sup className='text-pink-200'>*</sup></p>
            <input className="border border-richblack-700 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
              required
              type={showPassword1 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Enter password "
              value={FormData.confirmPassword}
            />
            <span onClick={() => setShowPassword1(prev => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
              {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                ( <AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
            </span>
          </label>
        </div>

        <button className='bg-yellow-50 rounded-[8px] p-[12px] font-medium text-richblack-900 mt-2'>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
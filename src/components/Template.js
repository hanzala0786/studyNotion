import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import frameImg from '../assets/frame.png';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, description1, description2, image, formType, setIsLogedIn}) => {
  return (
    <div className='w-11/12 max-w-[1160px] h-full flex justify-between py-12 mx-auto'>
      {/* form container */}
      <div className='w-[450px]'>
        <h1 className='text-richblack-5 text-[1.875rem] leading-[2.375rem] font-bold'>
          {title}
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{description1}</span>
          <br />
          <span className='text-blue-100 italic'>{description2}</span>
        </p>

        {
          formType === "signup" ?
          (<SignupForm setIsLogedIn={setIsLogedIn}/>) :
          (<LoginForm setIsLogedIn={setIsLogedIn}/>)
        }
        <div className='flex w-full items-center mt-4'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='w-full flex bg-richblack-700 text-richblack-100 justify-center items-center 
          border rounded-[8px] border-richblack-700 py-[8px] font-medium mt-6 gap-x-2'>
          <FcGoogle/>
          Signup with Google
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImg} alt="frameImage"
          width={558} 
          height={504}
          loading='lazy'/>

        <img src={image} alt="frameImage"
          width={558} 
          height={490}
          loading='lazy'
          className='absolute -top-4 right-2'
        />
      </div>
    </div>
  )
}

export default Template
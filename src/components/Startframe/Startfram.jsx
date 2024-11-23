import React from 'react'
import pic from '../../assets/avataaars.svg'
export default function Startfram() {
  return (
    <div className='fram bg-teal-500  w-full h-screen flex justify-center items-center'>
<div className="images  w-1/5 mb-4">
    <img src={pic} alt="" /> 
    <h1 className='text-white text-2xl text-center mt-6  font-bold'>START FRAMEWORK</h1>
    <div className='flex items-center justify-center mb-2'>
  <div className='h-[4px] w-[80px] bg-white'></div>
  <i class="fa-solid fa-star text-white items-center mx-3"></i>
  <div className='h-[4px] w-[80px] bg-white'></div>
</div>
    <p className='text-white text-center mt-3 ml-5'>
    Graphic Artist - Web Designer - Illustrator</p>
</div>

    </div>
  )
}

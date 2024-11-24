import React from 'react'
import style from './contact.module.css'

export default function Contact() {
  return (
    <section>
        <div className="contact py-11 h-screen">
        <h1  className={ `sec font-bold text-3xl text-center mb-3 `}>CONTACT SECTION</h1>
        <div className='flex items-center justify-center mb-2'>
  <div className='h-[4px] w-[80px] bg-slate-800'></div>
  <i class="fa-solid fa-star items-center mx-3"></i>
  <div className='h-[4px] w-[80px] bg-slate-800'></div>
</div>

        <div className="inputs  h-96 py-24 text-center">
            <input className='w-1/2 py-5 border-b-2 border-gray-400 focus:outline-none  m-3' type="text"placeholder='username'  />
            <br />
            <input className='w-1/2 py-5 border-b-2 border-gray-400 focus:outline-none  m-3' type="text"placeholder='userAge' />
            <br />
            <input className='w-1/2 py-5 border-b-2 border-gray-400 focus:outline-none  m-3' type="text"placeholder='userEmail' />
            <br />
            <input className='w-1/2 py-5 border-b-2 border-gray-400 focus:outline-none  m-3' type="text"placeholder='userpassword' />
<br />
<div className='flex justify-start ml-[450px] text-white mt-7'><button className='bg-teal-400 w-40 h-11 rounded-2xl '>send</button></div>
           
        </div>
        </div>
    
      
    </section>
  )
}

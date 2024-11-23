import React from 'react'

export default function About() {
  return <>
    <section className="bg-teal-500 py-80 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">ABOUT COMPONENT</h2>
      <div className='flex items-center justify-center mb-2'>
  <div className='h-[4px] w-[80px] bg-white'></div>
  <i class="fa-solid fa-star items-center mx-3"></i>
  <div className='h-[4px] w-[80px] bg-white'></div>
</div>
      <div className="flex justify-center items-center space-x-10">
        <p className="max-w-md">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files, including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="max-w-md">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files, including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </section>


  </>
}

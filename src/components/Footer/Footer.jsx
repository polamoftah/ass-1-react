import React from 'react'

export default function Footer() {
  return <>
    <div className='footer flex justify-between c items-center text-white mt-3 h-52   bg-gray-700'>
        <div className="location ml-5">
            <h2 className="font-bold text-2xl">LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="around font-bold text-2xl">
            <h2>AROUND THE WEB</h2>
            
            <p><span><i class="fa-brands  border rounded-3xl p-2 fa-instagram"></i></span> <span><i class="fa-brands mx-3 mt-2  border rounded-3xl p-2 fa-twitter"></i></span> <span><i class="fa-brands mx-3 mt-2  border rounded-3xl p-2 fa-tiktok"></i></span> <span><i class="fa-brands mx-3 mt-2  border rounded-3xl p-2 fa-facebook"></i></span></p>
        </div>
      <div className="about mr-11  " >
        <h2 className='font-bold text-2xl'>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      
    </div>
    <div className="deep-footer text-center text-white h-24 items-center flex justify-center bg-gray-800">
        <p>Copyright © Your Website 2021</p>
    </div>
    </>
  
}

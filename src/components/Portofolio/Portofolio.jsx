import React, { useState } from "react";
import { Modal } from "flowbite-react";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(null);  
  const [images, setimages] = useState([
    { Path: "poert1.png", id: 1 },  
    { Path: "port2.png", id: 2 },
    { Path: "port3.png", id: 3 },
    { Path: "poert1.png", id: 4 },
    { Path: "port2.png", id: 5 },
    { Path: "port3.png", id: 6 },
  ]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <h2 className="text-3xl">Portfolio Component</h2>
        <div className="flex items-center justify-center mb-2 mt-3">
          <div className="h-[4px] w-[80px] bg-slate-800"></div>
          <i className="fa-solid fa-star text-slate-800 items-center mx-3"></i>
          <div className="h-[4px] w-[80px] bg-slate-800"></div>
        </div>
        <div className="container">
          <div className="flex flex-wrap gap-10">
            {images.map((elem) => (
              <div key={elem.id} className="w-[30%] relative">
                <img
                  src={elem.Path} 
                  className="w-full"
                  onClick={() => setOpenModal(elem.id)}  
                />
                <div className="layer absolute w-full h-full inset-0 bg-teal-300 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-700">
                  <i className="fa-solid fa-plus text-5xl text-white"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
       
        {images.map((elem) => (
          <Modal
            key={elem.id}
            show={openModal === elem.id}  
            onClose={() => setOpenModal(null)}  
          >
            <img src={elem.Path}  className="w-full h-auto" />
          </Modal>
        ))}
      </div>
    </>
  );
}
import React from 'react';
import p1 from "../../assets/Gallery/p1.JPG"
import p2 from "../../assets/Gallery/p2.JPG"

const Gallery = () => {
  return (
    <div>
       <div className="mx-44">
      <div className="divider before:bg-gray-300 after:bg-gray-400 mt-8 font-medium text-xl text-black">
        <span className="border px-5 py-3">RECENT PHOTOS</span>
      </div>
   
      <div className='grid grid-cols-2'>
        <div className='h-80'>
          <img src={p1} alt="" />
        </div>
        <div className='grid grid-rows-2'>
           <div>
            <img src={p2} alt="" />
           </div>
            <div>
              <img src={p2} alt="" />
            </div>
        </div>
      </div>
      

      <div className="divider before:bg-gray-300 after:bg-gray-400 mt-8 font-medium text-xl text-black">
        <span className="border px-5 py-3">GALLERY</span>
      </div>

      
    <div>
    <div className="relative w-full flex gap-4 py-6 ">

	  <img className="h-48   rounded-sm object-cover object-center dark:bg-gray-500" src={p2} alt="Image 1" />
	  <img className="h-48  rounded-sm object-cover object-center dark:bg-gray-500" src={p2} alt="Image 2" />
	  <img className="h-48  rounded-sm object-cover object-center dark:bg-gray-500" src={p2} alt="Image 3" />

    </div>
    </div>
      
    </div>
    </div>
  );
};

export default Gallery;
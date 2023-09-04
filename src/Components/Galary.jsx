import React from "react";

const Gallery = () =>{
 return (
   <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
    <h2 className='text-center text-gray-700 py-4'>Gallery</h2>
    <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=300' alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=300' alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover'src='https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=300' alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover'src='https://images.pexels.com/photos/917511/pexels-photo-917511.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover'src='https://images.pexels.com/photos/2867110/pexels-photo-2867110.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
        </div>
        {/* <div>
            <img className='w-full h-full object-cover'src='https://images.pexels.com/photos/1084362/pexels-photo-1084362.jpeg?auto=compress&cs=tinysrgb&w=300' alt="/" />
        </div> */}
    </div> 
   </div> 
  )  
}
export default Gallery
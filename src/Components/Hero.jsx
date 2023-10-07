 import React from "react";

 const Hero =()=>{
    return (
      <div className='w-full h-[90vh]'>
        <img src='https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg' alt='/'
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] n-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>
                    Find Your Special Trip
                </h1>
                <h2 className='text-4xl py-4 italic'>With Adventura</h2>
                <p>
                Welcome to Adventura, your one-stop destination for planning the perfect journey! From flights and hotels to personalized itineraries, we're here to make your travel dreams a reality.
                </p>
            </div>
        </div>
        </div>

    )
 }
 export default Hero;
 
  
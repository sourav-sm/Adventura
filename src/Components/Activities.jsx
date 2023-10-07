import React from "react";

const Activies = () =>{
    return(
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white text-2xl font-bold'>Resorts</h3>
              <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
              src='https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.jpg?s=612x612&w=is&k=20&c=ya1SUpdsA-njacqHBt_4nTP6K3M_UWL1t9gLNOZOmHo=' alt='/' />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white text-2xl font-bold'>Cruise</h3>
              <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
              src='https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
             </div>
            {/* <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] text-white text-2xl font-bold'>Advantures</h3>
              <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
              src='https://images.pexels.com/photos/248570/pexels-photo-248570.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
            </div> */}
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold'>Adventures</h3>
               <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.pexels.com/photos/13910618/pexels-photo-13910618.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
            </div>

        </div>
    )
}
export default Activies;
import React from "react";

const Booking = () =>{
    return(
        <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                <option>Goa, India</option>
                <option>Maldives, India</option>
                <option>Kashmir, India</option>
                <option>Agra, India</option>
                <option>Rome, Italy</option>
                <option>Kyoto, Japan:</option>
                <option>New York City, USA</option>
                <option>Cape Town, South Africa</option>
                <option>Machu Picchu, Peru</option>
                <option>Sydney, Australia</option>
                <option>Bangkok, Thailand</option>
                <option>Dubai, UAE</option>
                <option>Cairo, Egypt</option>
                <option>Banff National Park, Canada</option>
                <option>Paris, France</option>
                </select>
                </div>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                      <label>Check-In</label>  
                      <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                      <label>Check-Out</label>  
                      <input className='border rounded-md p-2' type="date" />
                    </div>
                </div>
                <div className='flex flex-col my-2 p-2 w-full'>
                     <label>Search</label>  
                     <button>Rates & Availibility</button>
                </div>
            </form>
        </div>
    )
}
export default Booking;
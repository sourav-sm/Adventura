import React from "react";

const Contact =()=>{
    return(
      <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send Us a Message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
          <img src='https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' 
          className='w-full lg:h-full object-cover p-2 max-h-[600px] h-[200px]'
          />
          <form>
            <div className='grid grid-cols-2'>
              <input className='border m-2 p-2' type="text" placeholder="First Name" />
              <input className='border m-2 p-2'type="text" placeholder="Lat Name" />
              <input className='border m-2 p-2' type="email" placeholder="Email Id" />
              <input className='border m-2 p-2' type="tel" placeholder="Phne No" />
              <input className='border col-span-2 p-2 m-2' type="text" placeholder="Address" />
              <textarea className='border col-span-2 p-2 m-2' cols="25" rows="17"></textarea>
              <button className='col-span-2 m-2'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Contact;
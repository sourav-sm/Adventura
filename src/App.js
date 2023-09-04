import React from 'react'
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Activies from './Components/Activities';
import Booking from './Components/Booking';

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activies/>
      <Booking/>
    </div>
  );
}

export default App;

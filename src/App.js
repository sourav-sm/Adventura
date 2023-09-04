import React from 'react'
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Activies from './Components/Activities';
import Booking from './Components/Booking';
import Gallery from './Components/Galary';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activies/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

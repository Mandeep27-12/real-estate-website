import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Gallery3D from './components/Gallery3D'; // Naya 3D component import kiya

function App() {
  return (
    <div className="bg-[#02030A] min-h-screen selection:bg-[#B8860B] selection:text-white">
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Section - Full Visual Impact */}
      {/* Iska ID 'home' hona chahiye Navbar link ke liye */}
      <div id="home">
        <Hero />
      </div>

      {/* 3. About Section - The Story */}
      <About />

      {/* 4. Gallery Section - Normal Horizontal Slide */}
      <Gallery />

      {/* 5. 3D Archive Section - Interactive Tilt Effect */}
      {/* Iska ID 'gallery3d' Navbar se link hai */}
      <section id="gallery3d">
        <Gallery3D />
      </section>

      {/* --- FUTURE SECTIONS --- */}
      {/* <Stats id="stats" /> */}
      {/* <Projects id="projects" /> */}
      {/* <Contact id="contact" /> */}

      {/* Simple Luxury Footer (Optional) */}
      
    </div>
  );
}

export default App;
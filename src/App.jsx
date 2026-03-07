import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Gallery3D from './components/Gallery3D'; 
import OverviewGallery from './components/OverviewGallery';
import Footer from './components/Footer'; // Naya Footer Component

function App() {
  return (
    <div className="bg-[#02030A] min-h-screen selection:bg-[#B8860B] selection:text-white">
      
      {/* 1. Navigation - Smart Sticky Detection */}
      <Navbar />
      
      {/* 2. Hero Section - Pehla Impression */}
      <section id="home">
        <Hero />
      </section>

      {/* 3. About Section - Story aur Details */}
      <section id="about">
        <About />
      </section>

      {/* 4. Gallery Section - Cinematic Slider */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* 5. 3D Archive Section - Interactive Tilt Cards */}
      <section id="gallery3d">
        <Gallery3D />
      </section>

      {/* 6. Overview Section - Infinity Loop & RGB Cards */}
      <section id="overview">
        <OverviewGallery />
      </section>

      {/* FUTURE SECTIONS (Yahan Project & Contact dalenge bad mein) */}
      {/* <section id="projects"> <Projects /> </section> */}
      {/* <section id="contact"> <Contact /> </section> */}

      {/* 7. Footer Section - Luxury Branding & Links */}
      <Footer />
      
    </div>
  );
}

export default App;
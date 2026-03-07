import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Gallery3D from './components/Gallery3D'; 
import OverviewGallery from './components/OverviewGallery';
import Projects from './components/Projects'; // Naya Luxury Projects Section
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#02030A] min-h-screen selection:bg-[#B8860B] selection:text-white">
      
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 3. About Section */}
      <section id="about">
        <About />
      </section>

      {/* 4. Gallery Section - Cinematic Center Slider */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* 5. 3D Archive Section */}
      <section id="gallery3d">
        <Gallery3D />
      </section>

      {/* 6. Overview Section - Infinity RGB Cards */}
      <section id="overview">
        <OverviewGallery />
      </section>

      {/* 7. Projects Section - Luxury Cinematic Portfolio */}
      <section id="projects">
        <Projects />
      </section>

      {/* 8. Contact Section - Compact 3D Luxury Form */}
      <section id="contact">
        <Contact />
      </section>

      {/* 9. Footer Section */}
      <Footer />
      
    </div>
  );
}

export default App;
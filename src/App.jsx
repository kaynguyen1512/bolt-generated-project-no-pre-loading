import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact'; // Import Contact component

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact /> {/* Render Contact component below FAQ */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

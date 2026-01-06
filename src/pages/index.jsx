import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import OurSolution from '../components/OurSolution';
import GridBackground from '../components/GridBackground';
// import WhyGlass from '../components/WhyGlass';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F6] font-sans">
      <Navbar />
      <GridBackground variant="default">
        <Hero />
        <ProblemSection />
        <OurSolution />
      </GridBackground>
      
      {/* <WhyGlass />
      <Footer /> */}
    </div>
  );
}
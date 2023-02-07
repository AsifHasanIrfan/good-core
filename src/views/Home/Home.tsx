import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

const Home = () => {
  return (
    <>
      {/* Top hero section */}
      <Hero />
      
      {/* services section */}
      <Services />
    </>
  );
};

export default Home;
import React from 'react';
import Awards from './components/Awards/Awards';
import Objective from './components/Objective/Objective';
import Hero from './components/Hero/Hero';
import OurClients from './components/OurClients/OurClients';
import Services from './components/Services/Services';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Testimonial from './components/Testimonial/Testimonial';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CTA from './components/CTA/CTA';
import Approach from './components/Approach/Approach';
import AboutUs from './components/AboutUs/AboutUs';
import NewsAndEvents from './components/News&Events/News&Events';
import FAQ from './components/FAQ/FAQ';

const Home = () => {
  return (
    <>
      {/* Top hero section */}
      <Hero />
      {/* services section */}
      <Services />
      {/* success stories section */}
      <SuccessStories />
      {/*Our Clients Section */}
      <OurClients />
      {/* Our Clients Say Section */}
      <Testimonial />
      {/* Awards & Recognition Section */}
      <Awards />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Business Objectives Section */}
      <Objective />
      {/* cta Section */}
      <CTA />
      {/* Our Approach Section */}
      <Approach />
      {/* About Us Section */}
      <AboutUs />
      {/* Company News And Events Section */}
      <NewsAndEvents />
      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default Home;
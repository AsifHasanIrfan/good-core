import AboutUs from './components/AboutUs/AboutUs';
import Approach from './components/Approach/Approach';
import Awards from './components/Awards/Awards';
import CTA from './components/CTA/CTA';
import Hero from './components/Hero/Hero';
import NewsAndEvents from './components/News&Events/News&Events';
import Objective from './components/Objective/Objective';
import Services from './components/Services/Services';
import SuccessStories from './components/SuccessStories/SuccessStories';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import OurClients from './components/OurClients/OurClients';
import FAQ from '../../shared/FAQ/FAQ';
import Testimonial from '../../shared/Testimonial/Testimonial';
import { FAQData } from './constant';

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
      <FAQ faqs={FAQData} />
    </>
  );
};

export default Home;
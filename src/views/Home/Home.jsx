import AboutUs from './components/AboutUs/AboutUs';
import Approach from './components/Approach/Approach';
import Hero from './components/Hero/Hero';
import Objective from './components/Objective/Objective';
import Services from './components/Services/Services';
import SuccessStories from './components/SuccessStories/SuccessStories';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import OurClients from './components/OurClients/OurClients';
import FAQ from '../../shared/FAQ/FAQ';
import Testimonial from '../../shared/Testimonial/Testimonial';
import { FAQData } from './constant';
import Awards from '../../shared/Awards/Awards';
import NewsAndEvents from '../../shared/News&Events/News&Events';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../shared/CTA/CTA';

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
      <Awards showButton={true} />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Business Objectives Section */}
      <Objective />
      {/* cta Section */}
      <CTA
        title="How much will your app cost?"
        description="Send us the features you are looking to build and we shall advise on the next steps."
      />
      {/* Our Approach Section */}
      <Approach />
      {/* About Us Section */}
      <AboutUs />
      {/* Company News And Events Section */}
      <NewsAndEvents
        sectionTitle={
          <>
            Company <SectionHeading highlightText="News & Events" />
          </>
        }
      />
      {/* FAQ Section */}
      <FAQ faqs={FAQData} />
    </>
  );
};

export default Home;
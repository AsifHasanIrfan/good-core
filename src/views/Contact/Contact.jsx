import ContactBanner from './components/ContactBanner/ContactBanner';
import ContactDetails from './components/ContactDetails/ContactDetails';
import GlobalLocation from './components/GlobalLocation/GlobalLocation';
import LocationInMap from './components/LocationInMap/LocationInMap';

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactDetails />
      <GlobalLocation />
      <LocationInMap />
    </>
  );
};

export default Contact;
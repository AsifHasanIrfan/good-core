import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        { children }
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
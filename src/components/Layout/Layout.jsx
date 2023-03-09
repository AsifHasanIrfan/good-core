import { useRouter } from 'next/router';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
        { children }
      {router.pathname !== "/contact" ? <Contact /> : null}
      <Footer />
    </>
  );
};

export default Layout;
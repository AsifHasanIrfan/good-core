import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
        { children }
      <Footer />
    </>
  );
};

export default Layout;
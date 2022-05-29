import Footer from "./Footer/Footer";
import Hero from "./HeroBanner/hero";
import Navbar from "./Navbar/Navbar";
import PersonalService from "./Services/PersonalService";
import Service from "./Services/Service";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
      <PersonalService />
      <Footer />
    </>
  );
};

export default Layout;

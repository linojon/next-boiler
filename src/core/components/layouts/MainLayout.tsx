import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout: React.FCC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

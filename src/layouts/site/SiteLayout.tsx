import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';

const SiteLayout: React.FCC = ({ children }) => {
  return (
    <>
      <SiteNavbar />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default SiteLayout;

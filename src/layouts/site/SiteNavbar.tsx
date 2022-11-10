import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import MenuDesktop from '../MenuDesktop';

import { siteMenuConfig } from './siteMenuConfig';

const APP_BAR_MOBILE_HEIGHT = 64;
const APP_BAR_DESKTOP_HEIGHT = 88;

const SiteNavbar: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <AppBar position="static">
      <Toolbar
      // disableGutters
      // sx={(theme) => {
      //   return {
      //     height: APP_BAR_MOBILE_HEIGHT,
      //     width: '100vw',
      //     [theme.breakpoints.up('md')]: {
      //       height: APP_BAR_DESKTOP_HEIGHT
      //     }
      //   }
      // }}
      >
        {/* // todo logo, hamburger button etc, mobile vs desktop */}
        <MenuDesktop isHome={isHome} navConfig={siteMenuConfig} />
      </Toolbar>
    </AppBar>
  );
};

export default SiteNavbar;

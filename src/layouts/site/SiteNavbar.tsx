import { AppBar, Box, Container, Hidden, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import MenuDesktop from '../MenuDesktop';
import MenuMobile from '../MenuMobile';

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
        <Hidden mdDown>
          <MenuDesktop isHome={isHome} navConfig={siteMenuConfig} />
        </Hidden>

        <Hidden mdUp>
          <MenuMobile isHome={isHome} navConfig={siteMenuConfig} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default SiteNavbar;

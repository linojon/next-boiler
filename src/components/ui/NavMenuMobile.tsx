import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useState } from 'react';
import NextLink from 'next/link';
import Scrollbar from 'src/components/ui/Scrollbar';
// import { MobileMenuIcon } from 'src/theme/icon';
import Image from 'next/image';
import configuration from 'src/lib/configuration';
import LinkButton from 'src/components/ui/LinkButton';
import { NavigationItem } from 'src/@types/NavigationItem';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react';

const NavMenuMobile: React.FC<{
  isHome: boolean;
  navConfig: NavigationItem[];
}> = ({ isHome, navConfig }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { pathname } = useRouter();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {/* <IconButton sx={{ color: 'common.white' }} onClick={handleDrawerOpen}>
        <MobileMenuIcon />
      </IconButton> */}
      <Hamburger toggled={drawerOpen} toggle={setDrawerOpen} />

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Box display={'inline-flex'}>
            <LinkButton href="/">
              <Image
                width={80}
                height={40}
                src={configuration.site.logo}
                alt="site logo"
              />
            </LinkButton>
          </Box>

          <List disablePadding>
            {navConfig.map((item, index) => {
              // todo if item.role ...
              return (
                <MenuMobileItem
                  key={index}
                  item={item}
                  pathname={pathname}
                  isHome={isHome}
                />
              );
            })}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
};

export default NavMenuMobile;

//----------------------------------------
// TODO handle submenus accordians

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

function MenuMobileItem({
  item,
  pathname,
  isHome,
}: {
  item: NavigationItem;
  pathname: string;
  isHome: boolean;
}) {
  const { title, path, icon, subItems } = item;
  const isActive = pathname === path;

  if (title === '[divider]') {
    return <Divider />;
  }

  // if (title === '[login]')

  return (
    <NextLink href={path || '#'} legacyBehavior passHref>
      <ListItemStyled disablePadding>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText disableTypography primary={item.title} />
      </ListItemStyled>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize', // 'uppercase',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

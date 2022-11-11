import { Box, Drawer, IconButton, List, ListItem, styled } from '@mui/material';
import { useState } from 'react';
import NextLink from 'next/link';
import Scrollbar from 'src/components/ui/Scrollbar';
import { MobileMenuIcon } from 'src/theme/icon';
import Image from 'next/image';
import configuration from 'src/configuration';
import LinkButton from 'src/components/ui/LinkButton';
import { NavigationItem } from 'src/@types/NavigationItem';

const MenuMobile: React.FC<{
  isHome: boolean;
  navConfig: NavigationItem[];
}> = ({ isHome, navConfig }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDrawerOpen}>
        <MobileMenuIcon />
      </IconButton>

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
            {navConfig.map((item) => {
              // todo if item.role ...
              return <MenuMobileItem />;
            })}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
};

export default MenuMobile;

//----------------------------------------

function MenuMobileItem({
  item,
  isOpen,
  isActive,
  onOpen,
}: {
  item: NavigationItem;
  isOpen: boolean;
  isActive: boolean;
  onOpen: VoidFunction;
}) {
  const { title, path, icon, subItems } = item;

  // if subItems , see MenuMobile from Opportunity project

  if (title === '[separator]') {
    return (
      <ListItemStyle
        sx={{ color: 'text.primary', borderBottom: '1px solid grey' }}
      >
        {' '}
      </ListItemStyle>
    );
  }
}

// ----------------------------------------------------------------------

const ICON_SIZE = 22;
const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

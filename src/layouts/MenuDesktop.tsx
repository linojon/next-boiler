import { Link, Stack, styled } from '@mui/material';
import path from 'node:path/win32';
import { NavigationItem } from 'src/@types/NavigationItem';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MenuDesktop: React.FC<{
  isHome: boolean;
  navConfig: NavigationItem[];
}> = ({ isHome, navConfig }) => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  // let { data: session, status } = useSession()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={4}>
      {navConfig.map((item, index) => {
        // todo if item.role ...
        return (
          <MenuDesktopItem
            key={index}
            item={item}
            pathname={pathname}
            isOpen={open}
            onOpen={handleOpen}
            onClose={handleClose}
            // isOffset={isOffset}
            isHome={isHome}
          />
        );
      })}
    </Stack>
  );
};

export default MenuDesktop;

//---------------------------------------
// TODO handle submenus dropdowns

function MenuDesktopItem({
  item,
  pathname,
  isHome,
  isOpen,
  // isOffset,
  onOpen,
  onClose,
}: {
  item: NavigationItem;
  pathname: string;
  isOpen: boolean;
  isHome: boolean;
  // isOffset: boolean

  onOpen: VoidFunction;
  onClose: VoidFunction;
}) {
  const { title, path, icon } = item;
  const isActive = pathname === path;

  if (title === '[separator]') {
    return <LinkStyled> | </LinkStyled>;
  }

  // if (title === '[login]') {
  //   return <AccountPopover />
  // }

  return (
    <NextLink key={title} href={path || '#'} passHref>
      <LinkStyled
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(!isActive && { color: 'common.white' }),
        }}
      >
        {/* {icon} */}
        {title}
      </LinkStyled>
    </NextLink>
  );
}

// ---------------------------------------

const LinkStyled = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },

  // copy from go-usa.us site

  // color: theme.palette.primary.main, // '#062d52', // theme.palette.text.primary,
  // marginRight: theme.spacing(2),
  // fontSize: '13px',
  // fontWeight: 700,
  // textTransform: 'uppercase',
  // textDecoration: 'none',
  // whiteSpace: 'nowrap',
  // '&:hover': {
  //   color: theme.palette.secondary.main, // '#c02126'
  // },
}));

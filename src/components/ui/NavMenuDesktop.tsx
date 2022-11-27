import { Box, Link, Stack } from '@mui/material';
import { NavigationItem } from 'src/@types/NavigationItem';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import theme from 'src/theme/theme';
import AccountPopover from './AccountPopover';
import { currentUser, userIsAuthorized } from 'src/authorization/auth-utils';
import { useSession } from 'next-auth/react';

const NavMenuDesktop: React.FC<{
  isHome: boolean;
  navConfig: NavigationItem[];
}> = ({ isHome, navConfig }) => {
  const { pathname } = useRouter();
  const user = currentUser(useSession());

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={4}>
      {navConfig.map((item, index) => {
        if (!item.role || userIsAuthorized(user, item.role))
          return (
            <MenuDesktopItem
              key={index}
              item={item}
              pathname={pathname}
              isHome={isHome}
            />
          );
      })}
      <AccountPopover />
    </Stack>
  );
};

export default NavMenuDesktop;

//---------------------------------------
// TODO handle submenus dropdowns

function MenuDesktopItem({
  item,
  pathname,
  isHome,
}: {
  item: NavigationItem;
  pathname: string;
  isHome: boolean;
}) {
  const { title, path, icon } = item;
  const isActive = pathname === path;

  if (title === '[divider]') {
    return <Box sx={{ color: 'common.white' }}> | </Box>;
  }

  // if (title === '[login]') {
  //   return <AccountPopover />
  // }

  const color = isHome
    ? 'common.white'
    : !isActive
    ? 'common.white'
    : theme.palette.text.primary;

  // legacyBehaviour to avoid nested <a> tags
  return (
    <NextLink href={path || '#'} legacyBehavior>
      <Link
        color={color}
        underline="hover"
        sx={{
          textTransform: 'capitalize', // 'uppercase',
        }}
      >
        {/* {icon} */}
        {title}
      </Link>
    </NextLink>
  );
}

// ---------------------------------------

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  MenuItem,
  Typography,
} from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextLink from 'next/link';
import { useRef, useState } from 'react';
import { ProfileIcon, SettingsIcon } from 'src/theme/icon';
import MenuPopover from './MenuPopover';

const MENU_OPTIONS: { label: string; icon: any; linkTo: string }[] = [
  // { label: 'Home', icon: homeFill, linkTo: '/work' },
  { label: 'Profile', icon: ProfileIcon, linkTo: '#' },
  { label: 'Settings', icon: SettingsIcon, linkTo: '#' },
];

const AccountPopover: React.FC = () => {
  const { data: session, status } = useSession();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (status === 'loading') {
    return (
      <div>
        <p>Validating session...</p>
      </div>
    );
  }

  // if (!session) {
  //   return (
  //     <NextLink href="/api/auth/signin" legacyBehavior>
  //       <Link
  //         color={'color.white'}
  //         underline="hover"
  //         sx={{
  //           textTransform: 'capitalize', // 'uppercase',
  //         }}
  //       >
  //         Log In
  //       </Link>
  //     </NextLink>
  //   );
  // }
  if (!session) {
    return <button onClick={() => signIn()}>Sign In</button>;
  }

  // if (session) {
  // else {
  //   return (
  //     <div>
  //       <p>
  //         {session.user?.name} ({session.user?.email})
  //       </p>
  //       <NextLink href="/posts/new">
  //         <button>New Post</button>
  //       </NextLink>
  //       <NextLink href="/posts/drafts">
  //         <button>Drafts</button>
  //       </NextLink>
  //       <button onClick={() => signOut()}>Log out</button>
  //     </div>
  //   );
  // }
  else {
    return (
      <>
        <Box mr={2}>
          <Typography variant="subtitle2" color="text.primary"></Typography>
          {session.user.name}
        </Box>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
          }}
        >
          <Avatar alt={session.user.name} src={session.user.image} />
        </IconButton>

        <MenuPopover
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}
          sx={{ width: 230 }}
        >
          <>
            <Box my={1.5} px={2.5}>
              <Typography variant="subtitle1" noWrap>
                {session.user.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
                noWrap
              >
                {session.user.email}
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            {MENU_OPTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <NextLink
                  key={item.label}
                  href={item.linkTo}
                  legacyBehavior
                  passHref
                >
                  <MenuItem
                    onClick={handleClose}
                    sx={{ typography: 'body2', py: 1, px: 2.5 }}
                  >
                    {item.icon && (
                      <Box sx={{ mr: 2, width: 24, height: 24 }}>
                        <Icon />
                      </Box>
                    )}
                    {item.label}
                  </MenuItem>
                </NextLink>
              );
            })}

            {/* {!userData.role ||
            (userData.role == 'GUEST' && (
              <Box sx={{ p: 2, pt: 1.5 }}>
                <Typography fontSize="0.8rem">
                  If you require access to OppScore Workspace, please contact a
                  system manager to activate your user role.
                </Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))} */}

            <Box p={2} pt={1.5}>
              <Button
                fullWidth
                color="inherit"
                variant="outlined"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign Out
              </Button>
            </Box>
          </>
        </MenuPopover>
      </>
    );
  }
};

export default AccountPopover;

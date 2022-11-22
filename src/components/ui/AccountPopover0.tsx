// import { Icon } from '@iconify/react'
import { useRef, useState } from 'react';
// next
import NextLink from 'next/link';
// material
import { alpha } from '@mui/material/styles';
import {
  Box,
  Avatar,
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
// components
import MenuPopover from 'src/components/ui/MenuPopover';

import { signIn, signOut, useSession } from 'next-auth/react';
import { User } from '@prisma/client';
// import { skipAuth, mockSession, mockUser } from 'src/authorization/auth-mock'

// ----------------------------------------------------------------------

type MenuOptionType = {
  label: string;
  icon: any;
  linkTo: string;
};

const MENU_OPTIONS: MenuOptionType[] = [
  // { label: 'Home', icon: homeFill, linkTo: '/work' },
  // { label: 'Profile', icon: personFill, linkTo: '#' },
  // { label: 'Settings', icon: settings2Fill, linkTo: '#' }
];

// ----------------------------------------------------------------------

export default function AccountPopover0() {
  let { data: session, status } = useSession();
  // let userData = session && (session.userData as User); // todo

  // todo skipauth
  // if (skipAuth()) {
  //   session = mockSession()
  //   userData = mockUser()
  // }

  // const loading = status === 'loading'

  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!session) {
    return (
      <button
        id="loginButton"
        // onClick={() =>
        //   signIn('google', {
        //     callbackUrl: `${window.location.origin}/work`,
        //   })
        // }
        onClick={() =>
          signIn('google', {
            callbackUrl: `${window.location.origin}/work`,
          })
        }
      >
        Sign in
      </button>
    );
  } else {
    return (
      <>
        <Box sx={{ mr: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
            {session.user?.name || 'Anonymous'}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {userData.role.toLowerCase()}
          </Typography> */}
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
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
          }}
        >
          <Avatar
            alt={session.user?.name || ''}
            src={session?.user?.image || ''}
          />
        </IconButton>

        <MenuPopover
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}
          sx={{ width: 220 }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle1" noWrap>
              {session.user?.name || 'Anonymous'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {session.user?.email}
            </Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          {MENU_OPTIONS.map((option) => (
            <NextLink key={option.label} href={option.linkTo} passHref>
              <MenuItem
                onClick={handleClose}
                sx={{ typography: 'body2', py: 1, px: 2.5 }}
              >
                {/* // todo icon */}
                {/* <Box
                  component={Icon}
                  icon={option.icon}
                  sx={{
                    mr: 2,
                    width: 24,
                    height: 24
                  }}
                /> */}

                {option.label}
              </MenuItem>
            </NextLink>
          ))}

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

          <Box sx={{ p: 2, pt: 1.5 }}>
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              Sign Out
            </Button>
          </Box>
        </MenuPopover>
      </>
    );
  }
}

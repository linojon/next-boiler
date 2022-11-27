import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { currentUser, isAuthenticating, userIsAuthorized } from './auth-utils';

const RoleGuard: React.FCC<{
  role: string;
}> = ({ role, children }) => {
  const user = currentUser(useSession());

  if (isAuthenticating(useSession())) {
    // todo show nicer display?
    return <>Authenticating...</>;
  }
  if (!role || userIsAuthorized(user, role)) {
    return <>{children}</>;
  } else {
    // todo show login link or redirect or nicer display
    return <Box>Not Authorized</Box>;
  }
};

export default RoleGuard;

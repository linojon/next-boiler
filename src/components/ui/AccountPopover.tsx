import { Link } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import NextLink from 'next/link';

const AccountPopover: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div>
        <p>Validating session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <NextLink href="/api/auth/signin" legacyBehavior>
        <Link
          color={'color.white'}
          underline="hover"
          sx={{
            textTransform: 'capitalize', // 'uppercase',
          }}
        >
          Log In
        </Link>
      </NextLink>
    );
  }

  // if (session) {
  else {
    return (
      <div>
        <p>
          {session.user?.name} ({session.user?.email})
        </p>
        <NextLink href="/posts/new">
          <button>New Post</button>
        </NextLink>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    );
  }
};

export default AccountPopover;

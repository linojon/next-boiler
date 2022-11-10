import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'src/core/components/ui/Link';
import { Button } from '@mui/material';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';

const HomePage: NextPageWithLayout = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Jonathan&quo;s Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button
          variant="contained"
          component={Link}
          noLinkStyle
          href="/dev/examples"
        >
          Examples
        </Button>
      </Box>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  );
};

// optionally
// HomePage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <MainLayout>
//       <NestedLayout>{page}</NestedLayout>
//     </MainLayout>
//   )
// }

export default HomePage;

import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'src/theme/theme';
import createEmotionCache from 'src/lib/createEmotionCache';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import SiteLayout from 'src/layouts/site/SiteLayout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// allow per-page layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

//
export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // allow per-page layouts or default one
  const getLayout =
    Component.getLayout ?? ((page) => <SiteLayout> {page}</SiteLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}

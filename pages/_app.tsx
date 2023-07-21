import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { CookiesProvider } from 'react-cookie';
import Layout from '../components/layout';
import { useIsClient } from '../components/common/hooks/useIsClient';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { isClient, key } = useIsClient();

  if (!isClient) return null;

  return (
    <Fragment key={key}>
      <CookiesProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </ThemeProvider>
      </CookiesProvider>
    </Fragment>
  );
}

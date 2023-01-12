import { useState } from 'react';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import { PageLoader } from '../components/common/loader';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    if (window.pageYOffset > 200) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    setIsLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout>
          {isLoading ? <PageLoader /> : <Component {...pageProps} />}
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

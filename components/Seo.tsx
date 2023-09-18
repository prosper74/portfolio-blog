import Head from 'next/head';
import { SeoProps } from './common/helpers/interfaces';

export default function SEO({ pageTitle, pageDescription }: SeoProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

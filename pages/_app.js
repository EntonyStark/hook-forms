import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hook Easy Form</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta itemProp="name" content="Hook Easy Form" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hook Easy Form" />
        <meta property="og:site_name" content="Hook Easy Form" />
        <meta property="og:description" content="The best way to manage your form state with hooks." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head';

import { Footer } from '../components/footer/footer';

import styles from './base-layout.module.scss';

export const BaseLayout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Hook Easy Form</title>
      <link rel="icon" href="/favicon.ico" />
      <meta itemProp="name" content="Hook Easy Form" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hook Easy Form" />
      <meta property="og:site_name" content="Hook Easy Form" />
      <meta property="og:description" content="The best way to manage your form state with hooks." />
      <meta property="og:image" content="vercel.svg" />
    </Head>

    <main>{children}</main>
    <Footer />
  </div>
);

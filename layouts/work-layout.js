import Head from 'next/head';

import { URLS } from '../constants';
import { Navigation } from '../components/navigation/navigation';
import { Footer } from '../components/footer/footer';

import styles from './work-layout.module.scss';

const navItems = [
  {
    id: 'examples', title: 'Examples', nested: false, link: false,
  },
  {
    id: 'simple', title: 'Simple form', nested: true, link: URLS.examples.simple,
  },
  {
    id: 'validation', title: 'With validation', nested: true, link: URLS.examples.validation,
  },
  {
    id: 'constructor', title: 'Form constructor', nested: false, link: URLS.constructor,
  },
];


export const WorkLayout = ({ children }) => {
  const packageName = 'Hook Easy Form';
  return (
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
      <Navigation packageName={packageName} navItems={navItems} />
      <main>
        {children}
        <Footer border={false} />
      </main>
    </div>
  );
};

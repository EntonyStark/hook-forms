import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { getRepoInfo } from '../actions/github';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export const BaseLayout = ({ children }) => {
  const [repoInfo, setRepoInfo] = useState({});

  useEffect(() => {
    if (Object.keys(repoInfo).length === 0) getRepoInfo().then((res) => setRepoInfo(res)).catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <Head>
        <title>Hook Easy Form</title>
        <link rel="icon" href="/favicon.ico" />
        <meta itemProp="name" content="Hook Easy Form" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hook Easy Form" />
        <meta property="og:site_name" content="Hook Easy Form" />
        <meta property="og:description" content="The best way to manage your form state with hooks." />
        <meta property="og:image" content="vercel.svg" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA==" crossOrigin="anonymous" /> */}
        {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" /> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" /> */}
      </Head>
      <Header repoInfo={repoInfo} />
      <div className="container">
        {React.cloneElement(children, { repoInfo })}
      </div>
      {/* <Footer /> */}
    </>
  );
};

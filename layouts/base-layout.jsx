import React, { useEffect, useState } from 'react';

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
      <Header repoInfo={repoInfo} />
      <div className="container">
        {React.cloneElement(children, { repoInfo })}
      </div>
      <Footer />
    </>
  );
};

BaseLayout.defaultProps = {};

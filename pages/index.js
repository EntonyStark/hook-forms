import Link from 'next/link';

import { BaseLayout } from '../layouts/base-layout';
import { packageTitle, URLS } from '../constants';

export const getStaticProps = async () => ({
  props: {},
});

const Home = ({ repoInfo }) => {
  console.log('props', repoInfo);
  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-auto py-5">
          <h1 className="display-3">
            Welcome to <a href={repoInfo.html_url}>{packageTitle}</a>
          </h1>
          <hr className="my-4" />
          <p className="lead">The best way to manage your form state with hooks.</p>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">Start learning new things here</p>
              <Link href={URLS.getStarted}>
                <a className="btn btn-primary">Getting started &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text">See how you can use it</p>
              <Link href={URLS.examples.simple}>
                <a className="btn btn-primary">Examples &rarr;</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">Description for API</p>
              <Link href={URLS.doc.api}>
                <a className="btn btn-primary">Documentation &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Create your form array with us</p>
              <Link href={URLS.doc.api}>
                <a className="btn btn-primary">Form constructor &rarr;</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default () => (
  <BaseLayout>
    <Home />
  </BaseLayout>
);

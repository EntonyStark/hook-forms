import Link from 'next/link';

import { packageTitle, URLS } from '../constants';

export const getStaticProps = async () => ({
  props: {},
});

const Home = ({ repoInfo }) => (
  <>
    <div className="row justify-content-center mt-5">
      <div className="col-auto py-5">
        <h1 className="display-3">
          Welcome to <a href={repoInfo.html_url}>{packageTitle}</a>
        </h1>
        <hr className="my-4" />
        <p className="lead">The best way to manage your form state with hooks.</p>
      </div>
    </div>
    <div className="row justify-content-center mb-5">
      <h3>Features</h3>
    </div>
    <div className="row my-5">
      <div className="col-sm-12 col-md-4">
        <article className="text-center">
          <h3>DX</h3>
          <p>Intuitive, feature-complete API providing a seamless experience to developers when building forms.</p>
        </article>
      </div>
      <div className="col-sm-12 col-md-4">
        <article className="text-center">
          <h3>Super Light</h3>
          <p>Package size matters. Hook Easy Form is a tiny library without any dependencies.</p>
        </article>
      </div>
      <div className="col-sm-12 col-md-4">
        <article className="text-center">
          <h3>Adoptable</h3>
          <p>Since form state is inherently local, it can be easily adopted without other dependencies.</p>
        </article>
      </div>
      <div className="col-sm-12 col-md-4" /> { /* empty box */}
      <div className="col-sm-12 col-md-4">
        <article className="text-center">
          <h3>Typescript support</h3>
          <p>Full typescript support, you can found all types for form.</p>
        </article>
      </div>
    </div>
    <div className="row justify-content-center my-5">
      <div className="col-sm-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <p className="card-text">Start learning new things here</p>
            <Link href={URLS.getStarted}>
              <a className="btn btn-primary">Getting started &rarr;</a>
            </Link>
          </div>
        </div>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="card-text">See how you can use it</p>
            <Link href={URLS.examples.simple}>
              <a className="btn btn-primary">Examples &rarr;</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <p className="card-text">Description for API</p>
            <Link href={URLS.api}>
              <a className="btn btn-primary">Documentation &rarr;</a>
            </Link>
          </div>
        </div>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="card-text">Create your form array with us</p>
            <Link href={URLS.constructor}>
              <a className="btn btn-primary">Form constructor &rarr;</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default (props) => (
  <Home {...props} />
);

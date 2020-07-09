import Link from 'next/link';
import { useRouter } from 'next/router';

import { getPackageVersion } from '../../utils/getPackageVersion';
import { URLS, packageTitle } from '../../constants';

const navItems = [
  {
    id: 'get-started', title: 'Getting started', link: URLS.getStarted,
  },
  {
    id: 'doc', title: 'Documentation', link: URLS.doc.props,
  },

  {
    id: 'examples', title: 'Examples', link: URLS.examples.simple,
  },
  {
    id: 'constructor', title: 'Form constructor', link: URLS.constructor,
  },
];

export const Header = ({ repoInfo }) => {
  const router = useRouter();

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href={URLS.home}>
          <a className="navbar-brand">{`${packageTitle}, v${getPackageVersion()}`}</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto mr-2">
            {navItems.map((el) => (
              <li key={el.id} className={el.link === router.pathname ? 'nav-item active' : 'nav-item'}>
                <Link href={el.link}>
                  <a className="nav-link">{el.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <form className="form-inline" style={{ width: '10%' }}>
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fab fa-github" /></span>
              </div>
              <input
                value={repoInfo.stargazers_count || ''}
                className="form-control bg-white"
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

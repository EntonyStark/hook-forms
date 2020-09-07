import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getPackageVersionFromNpm, getPackageVersionFromLocal } from '../../utils/getPackageVersion';
import { URLS, packageTitle } from '../../constants';

const LINK_TYPE = 'link';
const DROPDOWN_TYPE = 'dropdown';

const navItems = [
  {
    id: 'get-started', title: 'Getting started', type: LINK_TYPE, url: URLS.getStarted,
  },
  {
    id: 'doc', title: 'API', type: LINK_TYPE, url: URLS.api,
  },
  {
    id: 'examples',
    title: 'Examples',
    type: DROPDOWN_TYPE,
    urls: [
      { id: '0', link: URLS.examples.simple, title: 'Simple' },
      { id: '1', link: URLS.examples.validation, title: 'Validation' },
    ],
  },
  {
    id: 'constructor', title: 'Form constructor', type: LINK_TYPE, url: URLS.constructor,
  },
];

export const Header = ({ repoInfo }) => {
  const router = useRouter();
  const [packageV, setPackageV] = useState(getPackageVersionFromLocal());

  useEffect(() => {
    getPackageVersionFromNpm().then((res) => setPackageV(res));
  }, []);
  const getItems = (item) => {
    switch (item.type) {
      case LINK_TYPE: {
        return (
          <li key={item.id} className={item.link === router.pathname ? 'nav-item active' : 'nav-item'}>
            <Link href={item.url}>
              <a className="nav-link">{item.title}</a>
            </Link>
          </li>
        );
      }
      case DROPDOWN_TYPE: {
        return (
          <li key={item.id} className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {item.title}
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {item.urls.map((el) => (
                <Link key={el.id} href={el.link}>
                  <a className="dropdown-item">{el.title}</a>
                </Link>
              ))}
            </div>
          </li>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href={URLS.home}>
            <a className="navbar-brand text-truncate">{`${packageTitle}, v${packageV}`}</a>
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
              {navItems.map(getItems)}
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
    </header>
  );
};

import Link from 'next/link';

import packageJson from '../../package.json';
import { URLS } from '../../constants';

// import { classNames } from '../../utils/classNames';
import styles from './navigation.module.scss';

export const Navigation = ({ packageName, navItems }) => {
  const version = packageJson.dependencies['hook-easy-form'].replace(/^\^/, '');
  return (
    <>
      <nav className={styles.nav}>
        <Link href={URLS.home}>
          <div className={styles.nav__logoBox}>
            <h4>{packageName}</h4>
            <p>{`v${version}`}</p>
          </div>
        </Link>
        <ul className={styles.nav__list}>
          {navItems.map((el) => (el.link ? (
            <Link href={el.link} key={el.id}>
              <li className={el.nested ? styles.nav__subItem : styles.nav__item}>
                {el.title}
              </li>
            </Link>
          ) : (
            <li key={el.id} className={el.nested ? styles.nav__subItem : styles.nav__item}>
              {el.title}
            </li>
          )))}
        </ul>
      </nav>
    </>
  );
};

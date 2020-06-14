import Link from 'next/link';
import { useRouter } from 'next/router';

import packageJson from '../../package.json';
import { URLS } from '../../constants';

import { classNames } from '../../utils/classNames';
import styles from './navigation.module.scss';

export const Navigation = ({ packageName, navItems }) => {
  const router = useRouter();
  const version = packageJson.dependencies['hook-easy-form'].replace(/^\^/, '');

  const getClassName = (nested, link) => {
    const place = link === router.pathname;
    if (nested && !place) return styles.nav__subItem;
    if (nested && place) return classNames(styles.nav__subItem, styles['nav__subItem--active']);

    if (!nested && !place) return styles.nav__item;
    if (!nested && place) return classNames(styles.nav__item, styles['nav__item--active']);

    return '';
  };

  return (
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
            <li className={getClassName(el.nested, el.link)}>
              {el.title}
            </li>
          </Link>
        ) : (
          <li key={el.id} className={el.nested ? styles.nav__subItemNoLink : styles.nav__itemNoLink}>
            {el.title}
          </li>
        )))}
      </ul>
    </nav>
  );
};

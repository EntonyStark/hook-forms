import { classNames } from '../../utils/classNames';
import styles from './footer.module.scss';

export const Footer = ({ owner = {}, border = true }) => (
  <footer className={classNames({ [styles.footer]: true, [styles.footer__withoutBorder]: !border })}>
    <a href={owner.html_url} target="_blank" rel="noreferrer" className={styles.footer__link}>
      Powered by {owner.login}
    </a>
  </footer>
);

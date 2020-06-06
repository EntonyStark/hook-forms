import { ownerGitHubInfo } from '../../constants';

import { classNames } from '../../utils/classNames';
import styles from './footer.module.scss';

export const Footer = ({ border = true }) => (
  <footer className={classNames({ [styles.footer]: true, [styles.footer__withoutBorder]: !border })}>
    <a href={ownerGitHubInfo.html_url} target="_blank" rel="noreferrer" className={styles.footer__link}>
      Powered by {ownerGitHubInfo.login}
    </a>
  </footer>
);

import { TextWithLines } from '../typography/text-with-lines';

import { classNames } from '../../utils/classNames';
import styles from './navigation.module.scss';

export const Navigation = () => {
  console.log('s', styles);
  return (
    <div className="col-lg-3 d-none d-lg-block">
      <div className={styles.navigation}>
        <TextWithLines text="Menu" tag="p" />

        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}><code>&lt;/&gt;</code> <span>TEST sfasdfa</span></li>
          <li className={classNames(styles.navigation__item, styles['navigation__item--nested'])}>
            <code>&lt;/&gt;</code><span>Nested</span>
          </li>
          <li className={classNames(styles.navigation__item, styles['navigation__item--nested'])}>
            <code>&lt;/&gt;</code><span>Nested</span>
          </li>
          <li className={classNames(styles.navigation__item, styles['navigation__item--last'])}>
            <code>&lt;/&gt;</code><span>Nested last</span>
          </li>
          <li className={styles.navigation__item}><code>&lt;/&gt;</code> <span>Dapibus ac facilisis in</span></li>
        </ul>
      </div>
    </div>
  );
};

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { TextWithLines } from '../typography/text-with-lines';

import { classNames } from '../../utils/classNames';
import styles from './navigation.module.scss';

export const Navigation = ({ navigation }) => {
  const scrollTo = (id) => {
    const yourElement = document.getElementById(id);
    const additionalHeight = 56 + 5; // 56 = header, 5 margin
    const y = yourElement.getBoundingClientRect().top + window.pageYOffset - additionalHeight;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <div className={styles.navigation}>
        <TextWithLines text="Menu" tag="p" />

        <ul className={styles.navigation__list}>
          {navigation.map((el) => (
            <li
              key={el.id || el.anchor}
              className={classNames({
                [styles.navigation__item]: true,
                [styles['navigation__item--nested']]: el.nested,
                [styles['navigation__item--last']]: el.last,
              })}
              onClick={scrollTo.bind(null, el.anchor)}
            >
              <code>&lt;/&gt;</code> <span>{el.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

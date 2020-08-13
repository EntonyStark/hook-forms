import React, { useRef, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

import { useWidth } from '../hooks/useWidth';

import { classNames } from '../../utils/classNames';
import styles from './modal.module.scss';

const MAX_WIDTH = 1200;

export const CustomModal = ({
  children,
  className,
  closeEvent,
  title = 'Custom title',
}) => {
  const windowWidth = useWidth();
  const modal = useRef(null);

  const width = useMemo(() => {
    if (windowWidth >= MAX_WIDTH) return MAX_WIDTH;

    return windowWidth - (20 * 2);
  }, [windowWidth]);

  const handleClickOutside = (event) => {
    if (modal.current) {
      if (event.target && !modal.current.contains(event.target)) closeEvent();
    }
  };

  useEffect(() => {
    const collection = document.getElementsByTagName('body');
    if (collection.length !== 0) collection[0].setAttribute('style', 'overflow: hidden');
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      if (collection.length !== 0) collection[0].setAttribute('style', 'overflow: initial');
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div style={{ width }} className={classNames(styles.modal, className)} ref={modal}>
        <div className={classNames(styles.modal__headerBox)}>
          <span>{title}</span>
          <i className="fas fa-times" onClick={closeEvent} role="button" tabIndex="0" />
        </div>
        <div className={styles.modal__bodyBox}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

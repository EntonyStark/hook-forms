/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, createRef } from 'react';

import { classNames } from '../../../utils/classNames';
import styles from './select.module.scss';

export default ({
  options,
  emptyFirst,
  searchField,
  label,
  reset,
  onChangeEvent,
  touched,
  error,
  name,
  placeholder,
}) => {
  const DEFAUL_VALUE_OBJECT = { value: '', title: '' };
  const list = createRef();
  const [openOptions, toggleOptions] = useState(false);
  const [renderOptions, setRenderOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState(DEFAUL_VALUE_OBJECT);

  const handleClickOutside = (e) => {
    if (list.current) {
      if (e.target instanceof HTMLElement && !list.current.contains(e.target)) toggleOptions(false);
    }
  };

  const resetAll = () => {
    toggleOptions(false);
    setSearchValue('');

    setValue(DEFAUL_VALUE_OBJECT);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [list]);

  useEffect(() => {
    if (reset) resetAll();
    if (options.length !== 0) setRenderOptions(options);
    return () => resetAll();
  }, [reset, options]);

  const changeHandler = (el) => {
    if (typeof onChangeEvent === 'function') onChangeEvent(el);

    setValue(el);
    setSearchValue(el.title);
  };

  const emptyClick = () => {
    setValue(DEFAUL_VALUE_OBJECT);
  };

  const onChange = (e) => {
    if (!e.target.value) {
      setRenderOptions(options);
      setSearchValue('');
    } else {
      const filtered = options.filter((el) => el.value.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0);
      // console.log('f')
      setRenderOptions(filtered);
      setSearchValue(e.target.value);
    }
  };

  return (
    <div className={styles.select}>
      {label && <div className={styles.select__label}>{label}</div>}
      <div
        onClick={() => toggleOptions(!openOptions)}
        className={classNames({
          [styles.select__box]: true,
          [styles['select__box--error']]: !!(touched && error),
        })}
        role="button"
        tabIndex="0"
      >
        {!searchField && (
        <div>{value.title ? (
          <span>{value.title}</span>
        ) : (
          <span className={styles.select__placeholder}>{placeholder}</span>
        ) } &nbsp;
        </div>
        )}
        <input
          type={searchField ? 'text' : 'hidden'}
          className={styles.select__input}
          name={name}
          value={searchValue}
          autoComplete="off"
          disabled={!searchField}
          onChange={onChange}
          placeholder={placeholder}
        />
        {openOptions && (
          <ul className={styles.select__list} ref={list}>
            {emptyFirst && renderOptions.length !== 0 && (
              <li className={styles.select__item} onClick={emptyClick}>
                &nbsp;
              </li>
            )}
            {renderOptions.length === 0 ? (
              <li className={styles['select__item--empty']}>No data</li>
            ) : (
              renderOptions.map((el) => (
                <li key={el.value} className={styles.select__item} onClick={() => changeHandler(el)}>
                  {el.title}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      {touched && error && <span className={styles.select__error}>{error}</span>}
    </div>
  );
};

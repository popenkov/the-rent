import React, { FC, useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { PopularListProps } from './PopularList.types';

import styles from './PopularList.module.scss';

export const PopularList: FC<{ popularList: PopularListProps }> = ({ popularList }) => {
  const { title, list, limit } = popularList;
  const [limitedList, setLimitedList] = useState(list);
  const [restList, setRestList] = useState([]);
  const restListRef = useRef<HTMLUListElement>();
  const [heightRestList, setHeightRestList] = useState('');

  useEffect(() => {
    setLimitedList(limitedList.slice(0, limit));
    setRestList(list.slice(limit, list.length));
  }, []);

  const addHandler = useCallback(() => {
    if (restListRef.current.style.height == '') {
      const scrollHeight = restListRef.current?.scrollHeight;
      restListRef.current.style.height = `${scrollHeight}px`;
      restListRef.current.style.overflow = 'visible';
      setHeightRestList(`${scrollHeight}px`);
    } else {
      restListRef.current.style.height = '';
      restListRef.current.style.margin = '0';
      restListRef.current.style.overflow = 'hidden';
      setHeightRestList('');
    }
  }, [heightRestList]);

  return (
    <article className={styles.popularList}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {limitedList.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link to={item.link} className={styles.link}>
              {item.label}
            </Link>
            {item.count && <span className={styles.count}>{item.count}</span>}
          </li>
        ))}
        {list.length > limitedList.length && (
          <li onClick={addHandler} className={clsx(styles.add, heightRestList !== '' && styles.addDisabled)}>
            More
          </li>
        )}
      </ul>
      <ul className={styles.restList} ref={restListRef}>
        {restList.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link to={item.link} className={styles.link}>
              {item.label}
            </Link>
            {item.count && <span className={styles.count}>{item.count}</span>}
          </li>
        ))}
      </ul>
    </article>
  );
};

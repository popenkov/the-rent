import React, { FC } from 'react';

import { useAppDispatch } from 'store/store.hooks';
import { PaginationProps } from './Pagination.types';

import styles from './Pagination.module.scss';

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPage, action }) => {
  const dispatch = useAppDispatch();

  const items: number[] = [];
  for (let index = 0; index < totalPage; index++) {
    items.push(index + 1);
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li
          key={item}
          className={item == currentPage ? `${styles.item} ${styles.item_current}` : styles.item}
          onClick={() => {
            dispatch(action(item));
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

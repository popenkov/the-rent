import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { ReactComponent as ArrowLeftIcon } from 'assets/images/icons/arrowLeft.svg';
import { SButtonIcon } from 'components/UI/SButtonIcon';
import { NavigationProps } from './Navigation.types';

import styles from './Navigation.module.scss';

export const Navigation: FC<NavigationProps> = ({ currentPage, totalPage, action }) => {
  const [btnLClassName, setBtnLClassName] = useState(styles.button);
  const [btnRClassName, setBtnRClassName] = useState(styles.button);

  useEffect(() => {
    currentPage == 1 ? setBtnLClassName(clsx(styles.button, styles.disabled)) : setBtnLClassName(styles.button);
    currentPage == totalPage ? setBtnRClassName(clsx(styles.button, styles.disabled)) : setBtnRClassName(styles.button);
  }, [currentPage, totalPage]);

  const handleBtnLeft = () => {
    if (currentPage > 1) {
      action(currentPage - 1);
    }
  };

  const handleBtnRight = () => {
    if (currentPage < totalPage) {
      action(currentPage + 1);
    }
  };

  return (
    <>
      <SButtonIcon className={btnLClassName} btnOnClick={handleBtnLeft}>
        <ArrowLeftIcon width="7" height="13" fill="#664EF9" className={styles.iconLeft} />
      </SButtonIcon>
      <SButtonIcon className={btnRClassName} btnOnClick={handleBtnRight}>
        <ArrowLeftIcon width="7" height="13" fill="#664EF9" className={styles.iconRight} />
      </SButtonIcon>
    </>
  );
};

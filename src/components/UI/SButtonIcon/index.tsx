import React, { FC } from 'react';

import { SButtonIconProps } from './SButtonIcon.types';

import styles from './SButtonIcon.module.scss';

export const SButtonIcon: FC<SButtonIconProps> = ({ type = 'button', btnOnClick, children, className, forwardRef }) => {
  return (
    <button type={type} onClick={btnOnClick} className={`${styles.button} ${className}`} ref={forwardRef}>
      {children}
    </button>
  );
};

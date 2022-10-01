import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  iconBefore,
  iconAfter,
  disabled,
  onClick,
}) => {
  return (
    <button type={type} className={clsx(styles.button, className)} disabled={disabled} onClick={onClick}>
      {iconBefore}
      {children}
      {iconAfter}
    </button>
  );
};

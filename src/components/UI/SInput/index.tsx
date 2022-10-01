import React, { FC, useState, useEffect } from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import { InputProps } from './SInput.types';
import { ReactComponent as UserIcon } from 'assets/images/icons/user.svg';
import { ReactComponent as MailIcon } from 'assets/images/icons/mail.svg';
import { ReactComponent as PassIcon } from 'assets/images/icons/pass.svg';
import { ReactComponent as WarningIcon } from 'assets/images/icons/warning.svg';

import styles from './SInput.module.scss';

export const SInput: FC<InputProps> = ({
  type,
  placeholder,
  iconName,
  label,
  name,
  addStyles,
  isWarning,
  width,
  className,
}) => {
  const [iconLeft, setIconLeft] = useState(null as React.ReactElement);
  const [iconRight, setIconRight] = useState(null as React.ReactElement);

  const inputClassNames = clsx(styles.input, isWarning && styles.input_warning, className);

  useEffect(() => {
    switch (iconName) {
      case 'user':
        setIconLeft(<UserIcon />);
        break;
      case 'email':
        setIconLeft(<MailIcon />);
        break;
      case 'pass':
        setIconLeft(<PassIcon />);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    isWarning ? setIconRight(<WarningIcon />) : setIconRight(null);
  }, [isWarning]);

  return (
    <div className={styles.container} style={{ width: width }}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.wrapper}>
        {iconLeft ? <div className={styles.iconLeft}>{iconLeft}</div> : null}
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={inputClassNames}
          style={addStyles}
          id={name}
        />
        {iconRight ? <div className={styles.iconRight}>{iconRight}</div> : null}
      </div>
    </div>
  );
};

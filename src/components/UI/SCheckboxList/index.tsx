import React, { FC } from 'react';

import { SCheckbox } from '../SCheckbox';
import { CheckboxProps } from '../SCheckbox/SCheckbox.types'; 

import styles from './SCheckboxList.module.scss';

export const SCheckboxList: FC<{ options: CheckboxProps[] }> = ({ options }) => {

  return (
    <ul className={styles.list}>
      {options.map((option) => (
        <li key={option.id} className={styles.item}>
          <SCheckbox
            label={option.label}
            id={option.id}
            name={option.name}
            value={option.value}
          />
        </li>
      ))}
    </ul>
  );
};

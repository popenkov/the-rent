import React, { FC } from 'react';
import clsx from 'clsx';

import { ServiceCardProps } from './ServiceCard.types';
import { Button } from 'components/UI/Button';

import styles from './ServiceCard.module.scss';

export const ServiceCard: FC<ServiceCardProps> = ({ title, subTitle, icon, description, btn, gold }) => {
  return (
    <article className={clsx(styles.card, gold && styles.gold)}>
      <header className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        {subTitle && (
          <>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.subtitle}>{subTitle}</div>
          </>
        )}
      </header>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
      <Button onClick={btn.onClick} className={styles[btn.className]}>
        {btn.children}
        {btn.iconAfter}
      </Button>
    </article>
  );
};

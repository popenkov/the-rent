import React, { FC } from 'react';

import { SearchOnMapProps } from './SearchOnMap.types';
import { Button } from 'components/UI/Button';
import { MapGradientIcon } from 'components/icons';

import styles from './SearchOnMap.module.scss';

export const SearchOnMap: FC<SearchOnMapProps> = ({ title, description, height, btn }) => {
  return (
    <section className={styles.map} style={{ height: height }}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button onClick={btn.onClick} className={styles.button}>
        <MapGradientIcon width={12} height={15} />
        {btn.children}
      </Button>
      </div>
    </section>
  );
};

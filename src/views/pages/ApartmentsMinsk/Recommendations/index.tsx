import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RecommendationProps } from './Recommendations.types';

import styles from './Recommendations.module.scss';

export const Recommendations: FC<{ recommendations: RecommendationProps[] }> = ({ recommendations }) => {
  return (
    <section className={styles.rec}>
      <h3 className={styles.title}>Рекомендуем посмотреть</h3>
      {recommendations && (
        <ul className={styles.list}>
          {recommendations.map((rec) => (
            <li key={rec.label} className={styles.item}>
              <Link to={rec.path} className={styles.link}>
                {rec.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

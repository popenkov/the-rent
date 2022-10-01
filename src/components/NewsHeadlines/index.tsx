import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { NewsHeadlinesProps } from './NewsHeadlines.types';
import { MONTHS } from 'core/constants/months.constant';
import { PagesLinks } from 'core/constants/pagesLinks.constant';

import styles from './NewsHeadlines.module.scss';

export const NewsHeadlines: FC<NewsHeadlinesProps> = ({ data, newsPerPage }) => {
  const newsOnDisplay = data?.slice(0, newsPerPage);

  return (
    <ul className={styles.list}>
      {newsOnDisplay.map((newsPreview) => (
        <li key={newsPreview.id} className={styles.item}>
          <Link to={`${PagesLinks.NEWS_PAGE}/${newsPreview.id}`} className={styles.link}>
            <div className={styles.title}>{newsPreview.title}</div>
            <div className={styles.date}>
              {newsPreview.date.getDate()} {MONTHS[newsPreview.date.getMonth()]}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

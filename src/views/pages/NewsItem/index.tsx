import React, { useEffect } from 'react';

import { FullNews } from 'components/FullNews';
import { breadcrumbsForNewsItem, news } from 'core/mockData/mockData';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { NewsList } from 'components/NewsList';
import { newsSlice } from 'store/news/news.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';

import styles from './NewsItem.module.scss';

export const NewsItem = () => {
  const { data } = useAppSelector((state) => state.newsReducer);
  const { setData } = newsSlice.actions;
  const dispatch = useAppDispatch();
  const NEWS_PER_PAGE = 3;

  useEffect(() => {
    dispatch(setData(news));
  }, []);

  return (
    <main className={styles.newsItem}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs breadcrumbs={breadcrumbsForNewsItem} />
        </div>
        <div className={styles.news}>
          <FullNews />
        </div>
      </div>
      <section className={styles.list}>
        <div className="container">
          <h2 className={styles.titleList}>Читайте также</h2>
          <NewsList data={data} newsPerPage={NEWS_PER_PAGE} currentPage={1} />
        </div>
      </section>
    </main>
  );
};

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from 'components/icons';
import { NewsHeadlines } from 'components/NewsHeadlines';
import { Button } from 'components/UI/Button';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { news } from 'core/mockData/mockData';
import { newsSlice } from 'store/news/news.slice';
import { useAppSelector, useAppDispatch } from 'store/store.hooks';

import styles from './NewsHeading.module.scss';

export const NewsHeading = () => {
  const { data } = useAppSelector((state) => state.newsReducer);
  const { setData } = newsSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const NEWS_PER_PAGE = 5;

  useEffect(() => {
    dispatch(setData(news));
  }, []);

  return (
    <article className={styles.news}>
      <h2 className={styles.title}>Новости</h2>
      <NewsHeadlines data={data} newsPerPage={NEWS_PER_PAGE} />
      <Button onClick={() => navigate(PagesLinks.NEWS_PAGE)} className={styles.button}>
        Посмотреть все
        <ArrowIcon width={10} height={10} />
      </Button>
    </article>
  );
};

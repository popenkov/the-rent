import React, { useEffect } from 'react';

import { Breadcrumbs } from 'components/Breadcrumbs';
import { breadcrumbsForNews, news } from 'core/mockData/mockData';
import { Search } from 'components/Search';
import { Pagination } from 'components/Pagination';
import { NewsList } from 'components/NewsList';
import { getPageCount } from 'core/utils/getPageCount';
import { newsSlice } from 'store/news/news.slice';
import { useAppSelector, useAppDispatch } from 'store/store.hooks';

import styles from './News.module.scss';

export const News = () => {
  const { data, newsPerPage, currentPage, query } = useAppSelector((state) => state.newsReducer);
  const { setData, setCurrentPage } = newsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filteredNews = news.filter(
      (news) => news.title.toLowerCase().includes(query) || news.description.toLowerCase().includes(query)
    );
    dispatch(setData(filteredNews));
  }, [query]);

  return (
    <main className="container">
      <section className={styles.news}>
        <Breadcrumbs breadcrumbs={breadcrumbsForNews} />
        <h1 className={styles.title}>Новости</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.list}>
          {data ? <NewsList data={data} newsPerPage={newsPerPage} currentPage={currentPage} query={query} /> : null}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPage={data ? getPageCount(data.length, newsPerPage) : 1}
          action={setCurrentPage}
        />
      </section>
    </main>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MONTHS } from 'core/constants/months.constant';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { INewsPreview } from './NewsPreview.types';

export const NewsPreview: FC<{ news: INewsPreview }> = (props) => {
  const { id, img, title, description, date } = props.news;
  return (
    <article className="news-preview">
      <div className="news-preview__img">
        <img src={img} alt={title} width="406" height="226.46" />
      </div>
      <div className="news-preview__info">
        <h3 className="news-preview__title">{title}</h3>
        <div className="news-preview__description">
          <p>{description}</p>
        </div>
        <footer className="news-preview__footer">
          <span className="news-preview__date">
            {date.getDate()} {MONTHS[date.getMonth()]} {date.getFullYear()}
          </span>
          <Link to={`${PagesLinks.NEWS_PAGE}/${id}`} className="news-preview__link" title={title}>
            Read
          </Link>
        </footer>
      </div>
    </article>
  );
};

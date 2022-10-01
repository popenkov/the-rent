import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBreadcrumbs } from './Breadcrumbs.types';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { ReactComponent as HomeIcon } from 'assets/images/icons/home.svg';

export const Breadcrumbs: FC<{ breadcrumbs: IBreadcrumbs[] }> = ({ breadcrumbs }) => {
  
  return (
    <>
      {breadcrumbs && (
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item breadcrumbs__item_first">
            <Link to={PagesLinks.MAIN_PAGE} className={'breadcrumbs__link'}>
              <HomeIcon fill='#4E64F9'/>
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li className="breadcrumbs__item" key={crumb.title}>
              {breadcrumbs.length == index + 1 ? (
                <span className="breadcrumbs__link breadcrumbs__link_last">{crumb.title}</span>
              ) : (
                <Link
                  to={crumb.link}
                  className={'breadcrumbs__link'}
                >
                  {crumb.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

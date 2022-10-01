import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { IItemNav } from './Nav.types';
import { ReactComponent as MapIcon } from 'assets/images/icons/map.svg';

export const Nav: FC<{ menu: IItemNav[] }> = (props) => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__main">
          {props.menu.map((item) => (
            <li key={item.title} className={location.pathname !== item.link ? "nav__item" : "nav__item nav__item_active"}>
              {location.pathname === item.link ? (
                <>
                  {item.map && <MapIcon className={'map'} width={8} height={10} />} {item.title}
                </>
              ) : (
                <Link
                  to={item.link}
                  title={item.title}
                  className={'nav__link'}
                >
                  {item.map && <MapIcon className={'map'} width={8} height={10} />} {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="nav__sub">
          <li className="nav__bookmarks">
            <Link to={PagesLinks.BOOKMARKS_PAGE} title="Закладки" className="nav__link">
              Закладки
            </Link>
          </li>
          <li className="nav__login">
            <Link to={PagesLinks.LOGIN_PAGE} title="Вход и регистрация" className="nav__link">
              Вход и регистрация
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IItemSubNav } from 'components/Header/SubNav/SubNav.type';

export const FooterSubNav: FC<{ menu: IItemSubNav[] }> = ({ menu }) => {
  return (
    <ul className="footer-subnav">
      {menu.map((item) => (
        <li key={item.title} className="footer-subnav__item">
          <Link
            to={item.link ? item.link : '#'}
            title={item.title}
            className={
              item.title == 'Квартиры' ? 'footer-subnav__link footer-subnav__link_last' : 'footer-subnav__link'
            }
          >
            {item.title}
          </Link>
          {item.list && (
            <ul className="footer-subnav__submenu">
              {item.list.map((item) => (
                <li key={item.title} className="footer-subnav__sub-item">
                  <Link to={item.link ? item.link : '#'} title={item.title} className="footer-subnav__sub-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

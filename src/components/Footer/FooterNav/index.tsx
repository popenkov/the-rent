import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IItemNav } from 'components/Header/Nav/Nav.types';

export const FooterNav: FC<{ menu: IItemNav[] }> = (props) => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav__list">
        {props.menu.map(
          (item, index) =>
            index !== 0 && (
              <li key={item.title} className="footer-nav__item">
                <Link to={item.link} title={item.title} className={'footer-nav__link'}>
                  {item.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

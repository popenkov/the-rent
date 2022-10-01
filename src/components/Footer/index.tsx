import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { socialGroups } from 'core/constants/social.constant';
import { Social } from 'components/Social';
import { FooterMenu, Menu } from 'core/constants/menu.constant';
import { Info } from './Info';
import { FooterSubNav } from './FooterSubNav';
import { FooterNav } from './FooterNav';
import { Payment } from 'components/Payment';
import { PAYMENTS } from 'core/constants/payments.constant';
import { PagesLinks } from 'core/constants/pagesLinks.constant';

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          {location.pathname === PagesLinks.MAIN_PAGE ? (
            <Logo />
          ) : (
            <Link to={PagesLinks.MAIN_PAGE}>
              <Logo />
            </Link>
          )}
          <div className="footer__title">Сдаём бай</div>
          <Info />
        </div>
        <div className="footer__nav">
          <FooterSubNav menu={FooterMenu} />
          <FooterNav menu={Menu} />
        </div>
        <div className="footer__external">
          <div className="footer__social">
            <Social socialBlock={socialGroups} />
          </div>
          <div className="footer__payment">
            <Payment payments={PAYMENTS}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

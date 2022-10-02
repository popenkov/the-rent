import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { IItemSubNav } from './SubNav.type';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { ReactComponent as MapIcon } from 'assets/images/icons/map.svg';
import { useRefCloseOut } from 'hooks/useRefCloseOut';
import { Button } from 'components/UI/Button';

export const SubNav: FC<{ menu: IItemSubNav[] }> = (props) => {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  const location = useLocation();
  const [titleForApartments, setTitleForApartments] = useState('Apartment For A Day');
  const refSubMenu = useRef() as React.MutableRefObject<HTMLUListElement>;

  const getTitleForApartments = (path) => {
    switch (path) {
      case PagesLinks.APARTMENTS_MINSK_PAGE:
        setTitleForApartments('Appartment in New York');
        break;
      case PagesLinks.APARTMENTS_GOMEL_PAGE:
        setTitleForApartments('Appartment in Washington');
        break;
      case PagesLinks.APARTMENTS_BREST_PAGE:
        setTitleForApartments('Appartment in San Francisco');
        break;
      case PagesLinks.APARTMENTS_VITEBSK_PAGE:
        setTitleForApartments('Appartment in Boston');
        break;
      case PagesLinks.APARTMENTS_GRODNO_PAGE:
        setTitleForApartments('Appartment in Chicago');
        break;
      case PagesLinks.APARTMENTS_MOGILEV_PAGE:
        setTitleForApartments('Appartment in Las Vegas');
        break;
      default:
        setTitleForApartments('Apartment For A Day');
        break;
    }
  };

  useEffect(() => {
    getTitleForApartments(location.pathname);
  }, [location]);

  useRefCloseOut(refSubMenu, setIsActiveSubmenu);

  const memoizedItemClassName = useCallback(
    (item) => {
      let itemClassName = 'subnav__item';

      if (item.link) {
        itemClassName = location.pathname == item.link ? 'subnav__item subnav__item_active' : 'subnav__item';
      } else {
        if (location.pathname.includes('apartments')) {
          itemClassName = 'subnav__item subnav__item_active';
        }
      }
      return itemClassName;
    },
    [location.pathname]
  );

  return (
    <div className="subnav">
      <div className="container">
        <div className="subnav__logo">
          {location.pathname === PagesLinks.MAIN_PAGE ? (
            <Logo />
          ) : (
            <Link to={PagesLinks.MAIN_PAGE}>
              <Logo />
            </Link>
          )}
        </div>
        <ul className="subnav__list">
          {props.menu.map((item) => (
            <li
              key={item.title}
              className={memoizedItemClassName(item)}
              onClick={() => {
                item.list ? setIsActiveSubmenu(!isActiveSubmenu) : null;
              }}
            >
              {location.pathname === item.link ? (
                <>
                  {item.title == 'Apartment For A Day' ? titleForApartments : item.title}
                  {item.map && <MapIcon className={'subnav__map'} width={12} height={15} />}
                </>
              ) : (
                <Link to={item.link ? item.link : '#'} title={item.title} className={'subnav__link'}>
                  {item.title == 'Apartment For A Day' ? titleForApartments : item.title}
                  {item.map && <MapIcon className={'subnav__map'} width={12} height={15} />}
                </Link>
              )}

              {item.list && isActiveSubmenu ? (
                <ul className="subnav__submenu" ref={refSubMenu}>
                  {item.list.map((item) => (
                    <li key={item.title} className="subnav__sub-item">
                      <Link to={item.link ? item.link : '#'} title={item.title} className="subnav__sub-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <Button
          onClick={() => {
            console.log('+ Place an ad');
          }}
          className="subnav__button"
        >
          + Place an ad
        </Button>
      </div>
    </div>
  );
};

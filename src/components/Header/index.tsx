import React from 'react';

import { Menu, SubMenu } from 'core/constants/menu.constant';
import { Nav } from './Nav';
import { SubNav } from './SubNav';

export const Header = () => {
  return (
    <header className="header">

        <div className="header__nav">
          <Nav menu={Menu}/>
        <section className="header__subnav">
          <SubNav menu={SubMenu}/>
        </section>
      </div>
    </header>
  );
};

import React, {FC, useState, useEffect} from 'react'
import clsx from 'clsx';

import styles from './TabBarItem.module.scss'

export const TabBarItem: FC<{ isActive: boolean; nav: string, tabHandler: ()=>void; lastchild?: boolean, children }> = ({ isActive, nav, tabHandler, lastchild, children }) => {
    const [active, setActive] = useState(null);

    const tabNavClassNames = clsx(
        styles.tabNav,
        active && styles.tabNavActive,
        lastchild && styles.tabNavLast
      );
  
    useEffect(() => {
      setActive(isActive);
    }, [isActive]);
  
    return (
      <>
        <article className={styles.tab}>
          <button className={tabNavClassNames} onClick={tabHandler}>{nav}</button>
          <div className={active ? styles.tabContentActive: styles.tabContent}>{children}</div>
        </article>
      </>
    );
  };
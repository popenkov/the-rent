import React, { useState } from 'react';

import { TabBarItem } from './TabBarItem';
import { ApartmentsForm } from 'components/ApartmentsForm';

import styles from './TabBar.module.scss';

export const TabBar = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className={styles.tabBar}>
      <TabBarItem isActive={tab === 1 ? true : false} nav={'Apartment For A Day'} tabHandler={() => setTab(1)}>
        <ApartmentsForm />
      </TabBarItem>
      <TabBarItem isActive={tab === 2 ? true : false} nav={'Real Estate'} tabHandler={() => setTab(2)}>
        <div>Fitlers for Real Estates</div>
      </TabBarItem>
      <TabBarItem isActive={tab === 3 ? true : false} nav={'Businesses'} tabHandler={() => setTab(3)}>
        <div>Fitlers for Businesses</div>
      </TabBarItem>
      <TabBarItem isActive={tab === 4 ? true : false} nav={'Car rental'} tabHandler={() => setTab(4)} lastchild={true}>
        <div>Filter for Car rental</div>
      </TabBarItem>
    </section>
  );
};

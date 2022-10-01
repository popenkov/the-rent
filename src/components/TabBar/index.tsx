import React, { useState } from 'react';

import { TabBarItem } from './TabBarItem';
import { ApartmentsForm } from 'components/ApartmentsForm'; 

import styles from './TabBar.module.scss';

export const TabBar = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className={styles.tabBar}>
      <TabBarItem isActive={tab === 1 ? true : false} nav={'Квартиры на сутки'} tabHandler={() => setTab(1)}>
        <ApartmentsForm />
      </TabBarItem>
      <TabBarItem isActive={tab === 2 ? true : false} nav={'Коттеджи и усадьбы'} tabHandler={() => setTab(2)}>
        <div>Фильтр для контента Коттеджи и усадьбы</div>
      </TabBarItem>
      <TabBarItem isActive={tab === 3 ? true : false} nav={'Бани и сауны'} tabHandler={() => setTab(3)}>
        <div>Фильтр для контента Бани и сауны</div>
      </TabBarItem>
      <TabBarItem
        isActive={tab === 4 ? true : false}
        nav={'Авто напрокат'}
        tabHandler={() => setTab(4)}
        lastchild={true}
      >
        <div>Фильтр для контента Авто напрокат</div>
      </TabBarItem>
    </section>
  );
};

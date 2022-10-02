import React from 'react';

import { ServiceCard } from 'components/ServiceCard';
import { ReactComponent as ClientsIcon } from 'assets/images/icons/clients.svg';
import { ReactComponent as AdIcon } from 'assets/images/icons/ad.svg';
import { ArrowIcon } from 'components/icons/';

import styles from './Services.module.scss';

export const Services = () => {
  return (
    <section className={styles.services}>
      <ServiceCard
        icon={<ClientsIcon width={65} height={65} />}
        subTitle={'Find your client for free!'}
        description={'Just register and create <b>free ads</b> in your account'}
        btn={{ children: '+ Place an ad', onClick: () => console.log('click'), className: 'yellowButton' }}
      />
      <ServiceCard
        icon={<AdIcon width={54} height={54} />}
        subTitle={'Поднимайте объявления'}
        description={
          'Вы в любое время можете <b>поднимать</b> объявления <b>вверх первой страницы</b> каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.'
        }
        btn={{
          children: 'Click to find out the cost',
          onClick: () => console.log('click'),
          className: 'yellowGradientButton',
          iconAfter: <ArrowIcon width={10} height={10} stroke="#242424" />,
        }}
      />
      <ServiceCard
        title={'Gold priority'}
        description={
          '<p>Priority placement with <b>Gold</b> allows <b> to fix your ad</b> on the top of the catalog!</p><br /><p>Gold ads <b> are rising every 5 minutes</b> on the first positions</p>'
        }
        btn={{
          children: 'More about Gold',
          onClick: () => console.log('click'),
          className: 'violetGradientButton',
          iconAfter: <ArrowIcon width={10} height={10} stroke="#FFFFFF" />,
        }}
        gold={true}
      />
    </section>
  );
};

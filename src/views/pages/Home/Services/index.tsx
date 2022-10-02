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
        subTitle={'Raise ads'}
        description={
          'You can <b>raise</b> your ads <b>to the top of the catalog</b>. They will be placed immediately after paid ads until another user repeats the procedure for their ads.'
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

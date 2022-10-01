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
        subTitle={'Начните привлекать клиентов бесплатно!'}
        description={
          'Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <b>бесплатно создавать и публиковать</b> объявления на сайте.'
        }
        btn={{ children: '+ Разместить объявление', onClick: () => console.log('click'), className: 'yellowButton' }}
      />
      <ServiceCard
        icon={<AdIcon width={54} height={54} />}
        subTitle={'Поднимайте объявления'}
        description={
          'Вы в любое время можете <b>поднимать</b> объявления <b>вверх первой страницы</b> каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.'
        }
        btn={{
          children: 'Узнать стоимость услуги',
          onClick: () => console.log('click'),
          className: 'yellowGradientButton',
          iconAfter: <ArrowIcon width={10} height={10} stroke="#242424" />,
        }}
      />
      <ServiceCard
        title={'Приоритет Gold '}
        description={
          '<p>Приоритетное размещение <b>Gold</b> позволяет <b>закрепить ваше объявление</b> в верхней части каталога!</p><br /><p>Gold объявления <b>перемещаются каждые 5 мин</b> на 1 позицию, что делает размещение одинаковым для всех.</p>'
        }
        btn={{
          children: 'Еще о тарифе Gold',
          onClick: () => console.log('click'),
          className: 'violetGradientButton',
          iconAfter: <ArrowIcon width={10} height={10} stroke="#FFFFFF" />,
        }}
        gold={true}
      />
    </section>
  );
};

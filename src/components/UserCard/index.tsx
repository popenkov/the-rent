import React, { FC } from 'react';
import clsx from 'clsx';

import { SButtonIcon } from 'components/UI/SButtonIcon';
import { UserCardProps } from './UserCard.types';
import { ReactComponent as ViberIcon } from 'assets/images/icons/viber-share.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/images/icons/whatsapp-share.svg';
import { ReactComponent as MailIcon } from 'assets/images/icons/mail.svg';

import styles from './UserCard.module.scss';

export const UserCard: FC<{ user: UserCardProps }> = (props) => {
  const { name, img, status, phone, email } = props.user;

  return (
    <article className={styles.user}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={name} width={59} height={59} className={styles.img} />
      </div>
      <div className={styles.status}>{status}</div>
      <div className={styles.name}>{name}</div>
      <a href={`tel: ${phone}`} className={styles.phone}>
        {phone}
      </a>
      <a href={`mailto: ${email}`} className={styles.email}>
        {email}
      </a>
      <div className={styles.share}>
        <SButtonIcon btnOnClick={() => console.log('viber')} className={clsx(styles.button, styles.viber)}>
          <ViberIcon width={15} height={16} fill={'#FFFFFF'} />
        </SButtonIcon>
        <SButtonIcon btnOnClick={() => console.log('whatsapp')} className={clsx(styles.button, styles.whatsapp)}>
          <WhatsAppIcon width={15} height={15} fill={'#FFFFFF'} />
        </SButtonIcon>
        <a href={`mailto: ${email}`}>
          <SButtonIcon btnOnClick={() => ''} className={clsx(styles.button, styles.mail)}>
            <MailIcon width={18} height={14} fill={'#FFFFFF'} />
          </SButtonIcon>
        </a>
      </div>
    </article>
  );
};

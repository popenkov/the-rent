import React from 'react';

import { CONTACT } from 'core/constants/contacts.constant';
import { ReactComponent as MapIcon } from 'assets/images/icons/map.svg';
import { ReactComponent as PhoneIcon } from 'assets/images/icons/phone.svg';
import { ReactComponent as MailIcon } from 'assets/images/icons/mail.svg';
import { ReactComponent as ClockIcon } from 'assets/images/icons/clock.svg';
import { Social } from 'components/Social';
import { socialContactsLeft } from 'core/constants/social.constant';

import styles from './Address.module.scss';

export const Address = () => {
  return (
    <address className={styles.address}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <MapIcon width={12.09} height={15} />
        </div>
        {CONTACT.address}
      </div>
      <div className={styles.item}>
        <div className={`${styles.icon} ${styles.icon_phone}`}>
          <PhoneIcon width={8.86} height={15} />
        </div>
        <a href={`tel: ${CONTACT.phone}`}>{CONTACT.phone}</a>
        <Social socialBlock={socialContactsLeft} />
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <MailIcon width={15} height={11.79} />
        </div>
        <a href={`mailto: ${CONTACT.email}`}>{CONTACT.email}</a>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <ClockIcon width={15} height={15} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: CONTACT.workingRegime }}></div>
      </div>
      <div className={styles.company}>{CONTACT.company}</div>
      <div className={styles.license}>{CONTACT.license}</div>
    </address>
  );
};

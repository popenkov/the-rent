import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SocialBlockProps } from './Social.types';
import { ReactComponent as VkGroupIcon } from 'assets/images/icons/vk-group.svg';
import { ReactComponent as InstGroupIcon } from 'assets/images/icons/insta-group.svg';
import { ReactComponent as FbGroupIcon } from 'assets/images/icons/fb-group.svg';
import { ReactComponent as VbShareIcon } from 'assets/images/icons/viber-share.svg';
import { ReactComponent as TgShareIcon } from 'assets/images/icons/telegram-share.svg';
import { ReactComponent as WaShareIcon } from 'assets/images/icons/whatsapp-share.svg';
import { VkShare } from './sharingIcons/VkShare';
import { FbShare } from './sharingIcons/FbShare';
import { ViberShare } from './sharingIcons/ViberShare';
import { TgShare } from './sharingIcons/TgShare';
import { WhatsAppShare } from './sharingIcons/WhatsAppShare';
import { PlacesOfUse } from 'core/constants/social.constant';

import styles from './Social.module.scss';

export const Social: FC<{ socialBlock: SocialBlockProps }> = (props) => {
  const { title, socials, placeOfUse, isForSharing } = props.socialBlock;

  const settingIcon = (iconName) => {
    switch (iconName) {
      case 'instagram-group':
        return <InstGroupIcon width={24} height={24} />;
      case 'vk-group':
        return <VkGroupIcon width={24} height={14} />;
      case 'facebook-group':
        return <FbGroupIcon width={20} height={20} />;
      case 'vk-share':
        return <VkShare width={17.07} height={9.96} className={styles.share} />;
      case 'facebook-share':
        return <FbShare width={8.54} height={17.07} className={styles.share} />;
      case 'viber-share':
        return <ViberShare width={16.53} height={17.42} className={styles.share} />;
      case 'telegram-share':
        return <TgShare width={16.53} height={13.86} className={styles.share} />;
      case 'whatsapp-share':
        return <WhatsAppShare width={16.72} height={16.8} className={styles.share} />;
      case 'telegram-contact':
        return <TgShareIcon width={16.53} height={13.86} className={styles.share} />;
      case 'viber-contact':
        return <VbShareIcon width={16.53} height={17.42} className={styles.share} />;
      case 'whatsapp-contact':
        return <WaShareIcon width={16.72} height={16.8} className={styles.share} />;
      default:
        break;
    }
  };

  return (
    <article
      className={clsx(
        styles.social,
        placeOfUse == 'news' && styles.social_news,
        placeOfUse == 'contacts' && styles.social_contacts,
        placeOfUse == 'contacts-right' && `${styles.social_contacts} ${styles.social_contactsRight}`,
        placeOfUse == 'apartments' && styles.social_apartments
      )}
    >
      <div className={styles.social__title}>{title}</div>
      <ul className={styles.social__list}>
        {isForSharing
          ? socials.map((social) => (
              <li className={styles.social__item} key={social.name}>
                {settingIcon(social.icon)}
              </li>
            ))
          : socials.map((social) => (
              <li className={styles.social__item} key={social.name}>
                {placeOfUse === PlacesOfUse.Contacts ? (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Открыть чат в ${social.name}`}
                  >
                    {settingIcon(social.icon)}
                  </a>
                ) : (
                  <Link
                    to={social.link}
                    title={social.name}
                    className={clsx(styles.social__link, `${styles.social__link}_${social.name}`)}
                    target="_blank"
                  >
                    {settingIcon(social.icon)}
                  </Link>
                )}
              </li>
            ))}
      </ul>
    </article>
  );
};

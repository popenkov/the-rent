import { SocialBlockProps } from 'components/Social/Social.types';

export const enum PlacesOfUse {
  Footer = 'footer',
  News = 'news',
  Contacts = 'contacts',
  ContactsRight = 'contacts-right',
  Apartments = 'apartments',
}

export const socialGroups: SocialBlockProps = {
  title: 'Мы в соцсетях',
  socials: [
    { name: 'instagram', link: '/mock-link', icon: 'instagram-group' },
    { name: 'vk', link: '/mock-link', icon: 'vk-group' },
    { name: 'facebook', link: '/mock-link', icon: 'facebook-group' },
  ],
};

export const socialNews: SocialBlockProps = {
  title: 'Поделиться',
  socials: [
    { name: 'vk', icon: 'vk-share' },
    { name: 'facebook', icon: 'facebook-share' },
    { name: 'viber', icon: 'viber-share' },
    { name: 'telegram', icon: 'telegram-share' },
    { name: 'whatsapp', icon: 'whatsapp-share' },
  ],
  placeOfUse: PlacesOfUse.News,
  isForSharing: true,
};

export const socialApartments: SocialBlockProps = {
  title: 'Поделиться',
  socials: [
    { name: 'vk', icon: 'vk-share' },
    { name: 'facebook', icon: 'facebook-share' },
    { name: 'viber', icon: 'viber-share' },
    { name: 'telegram', icon: 'telegram-share' },
    { name: 'whatsapp', icon: 'whatsapp-share' },
  ],
  placeOfUse: PlacesOfUse.Apartments,
  isForSharing: true,
};

export const socialContactsLeft: SocialBlockProps = {
  socials: [
    { name: 'viber', link: 'viber://chat?number=%2B375296214833', icon: 'viber-contact' },
    { name: 'telegram', link: 'https://t.me/+375296214833', icon: 'telegram-contact' },
    { name: 'whatsapp', link: 'https://wa.me/375296214833', icon: 'whatsapp-contact' },
  ],
  placeOfUse: PlacesOfUse.Contacts,
};

export const socialContactsRight: SocialBlockProps = {
  socials: [
    { name: 'instagram', link: '/mock-link', icon: 'instagram-group' },
    { name: 'vk', link: '/mock-link', icon: 'vk-group' },
    { name: 'facebook', link: '/mock-link', icon: 'facebook-group' },
  ],
  placeOfUse: PlacesOfUse.ContactsRight,
};

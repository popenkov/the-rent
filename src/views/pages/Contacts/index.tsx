import React, { useState } from 'react';

import { Social } from 'components/Social';
import { socialContactsRight } from 'core/constants/social.constant';
import { ContactsForm } from './ContactsForm';
import { Modal } from 'components/Modal';
import { Address } from './Address';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  const [modal, setModal] = useState(false);

  return (
    <main className={styles.contacts}>
      <div className={`container ${styles.container}`}>
        <section className={styles.info}>
          <h1 className={styles.title}>Контакты</h1>
          <p className={styles.description}>
            Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать
            Ваше мнение.
          </p>
          <Address />
          <article className={styles.notice}>
            Администрация сайта не владеет информацией о наличии свободных квартир
          </article>
        </section>
        <ContactsForm modalControl={setModal} />
        <Social socialBlock={socialContactsRight} />
      </div>
      <Modal isActive={modal} action={'Закрыть окно'}>
        <div className={styles.modal}>
          <h1 className={styles.modalTitle}>Ваше письмо отправлено!</h1>
          <p className={styles.modalDescription}>
            Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.
          </p>
        </div>
      </Modal>
    </main>
  );
};

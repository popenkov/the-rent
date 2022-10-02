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
          <h1 className={styles.title}>Contacts</h1>
          <p className={styles.description}>If you have a question or proposal, please don`t hesitate to contact us.</p>
          <Address />
          <article className={styles.notice}>
            The site administrators have no information about the availability of the flats
          </article>
        </section>
        <ContactsForm modalControl={setModal} />
        <Social socialBlock={socialContactsRight} />
      </div>
      <Modal isActive={modal} action={'Close modal'}>
        <div className={styles.modal}>
          <h1 className={styles.modalTitle}>Thank you!</h1>
          <p className={styles.modalDescription}>Your message was sent.</p>
        </div>
      </Modal>
    </main>
  );
};

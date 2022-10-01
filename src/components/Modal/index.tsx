import React, { FC, useEffect, useRef, useState } from 'react';

import { useRefCloseOut } from 'hooks/useRefCloseOut';
import { Button } from 'components/UI/Button';

import styles from './Modal.module.scss';

export const Modal: FC<{ isActive: boolean; children; action?: string }> = ({ isActive, children, action }) => {
  const [active, setActive] = useState(null);
  const refModal = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  useRefCloseOut(refModal, setActive);

  return (
    <section className={active ? styles.modal : styles.modal_close}>
      <div className={styles.content} ref={refModal}>
        {children}
        {action && (
          <Button
            className={styles.button}
            onClick={() => {
              setActive(false);
            }}
          >
            {action}
          </Button>
        )}
      </div>
    </section>
  );
};

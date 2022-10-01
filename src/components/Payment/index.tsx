import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPayment } from './Payment.type';

export const Payment: FC<{ payments: IPayment[] }> = ({ payments }) => {
  return (
    <ul className="payments">
      {payments.map((payment) => (
        <li className="payments__item" key={payment.name}>
          <Link to={payment.link} title={payment.name} className={`payments__link payments__link_${payment.name}`} target="_blank"></Link>
        </li>
      ))}
    </ul>
  );
};

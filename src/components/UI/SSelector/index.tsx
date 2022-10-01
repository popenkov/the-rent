import React, { useState, FC, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Field } from 'formik';

import { useRefCloseOut } from 'hooks/useRefCloseOut';
import { SelectorProps } from './SSelector.types';
import { ReactComponent as MetroIcon } from 'assets/images/icons/metro.svg';
import { ReactComponent as SortIcon } from 'assets/images/icons/sort.svg';
import { PagesLinks } from 'core/constants/pagesLinks.constant';

export const SSelector: FC<{
  options: SelectorProps[];
  placeholder: string | number;
  name: string;
  setValue?: (x: string, y: string|number)=>void;
  className?: string;
  setSelectedSwiftly?: any;
}> = ({ options, placeholder, name, setValue, className = '', setSelectedSwiftly }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<string | number>('');
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const headerClassName = isActive
    ? `select__header select__header_active ${className}`
    : `select__header ${className}`;
  const location = useLocation();

  useRefCloseOut(listRef, setIsActive);

  return (
    <div className={'select'} onClick={() => setIsActive(!isActive)}>
      {name === 'metro' && location.pathname == PagesLinks.MAIN_PAGE ? (
        <MetroIcon width={20} height={13} fill={'#BDBDBD'} className={'select_metroIcon'} />
      ) : null}{' '}
            {name === 'sort' ? (
        <SortIcon width={15} height={15} fill={'#7A7F86'} className={'select_sortIcon'} />
      ) : null}{' '}
      <Field type="text" className={headerClassName} placeholder={placeholder} name={name} />
      {isActive && (
        <ul className="select__list" ref={listRef}>
          {options.map((option) => (
            <li
              key={option.id}
              className="select__item"
              onClick={() => {
                setSelected(option.value);
                setIsActive(false);
                setValue(name, option.value); //для Formik (основной формы) - установка значения для передачи в форме
                setSelectedSwiftly; //для формы на главной - когда нет кнопки и нужна мгновенная фильтрация по выбранному значению
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

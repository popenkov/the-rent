import React, {FC} from 'react';

import { IconProps } from './icons.types';

export const ArrowIcon:FC<IconProps> = ({ width, height, stroke}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M1.46875 11.9902L6.46875 6.99023L1.46875 1.99023"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
    </svg>
  );
};


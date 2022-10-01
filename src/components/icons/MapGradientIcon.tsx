import React, { FC } from 'react';

import { IconProps } from './icons.types';

export const MapGradientIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.462 2.61628C10.3632 0.941861 8.54923 0 6.50853 0C4.48528 0 2.67132 0.941861 1.5376 2.61628C0.403882 4.25581 0.142254 6.34884 0.839929 8.18023C1.03179 8.6686 1.3283 9.17442 1.71202 9.62791L6.12481 14.8256C6.22946 14.9302 6.33412 15 6.49109 15C6.64807 15 6.75272 14.9302 6.85737 14.8256L11.2876 9.62791C11.6713 9.17442 11.9853 8.68605 12.1597 8.18023C12.8574 6.34884 12.5957 4.25581 11.462 2.61628ZM6.50853 8.7907C5.00853 8.7907 3.77016 7.55233 3.77016 6.05233C3.77016 4.55233 5.00853 3.31395 6.50853 3.31395C8.00853 3.31395 9.24691 4.55233 9.24691 6.05233C9.24691 7.55233 8.02598 8.7907 6.50853 8.7907Z"
        fill="url(#paint0_linear_559_23)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_559_23"
          x1="0.455078"
          y1="0.75"
          x2="14.7623"
          y2="4.06928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FEC100" />
        </linearGradient>
      </defs>
    </svg>
  );
};

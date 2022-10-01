import React, { FC } from 'react';

import { IconProps } from './icons.types';

export const ListIcon: FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="14.5036" height="3.22302" rx="1" fill={fill} />
      <rect y="11.2773" width="14.5036" height="3.22302" rx="1" fill={fill} />
      <rect y="5.88867" width="14.5036" height="3.22302" rx="1" fill={fill} />
    </svg>
  );
};

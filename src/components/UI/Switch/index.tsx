import React from 'react';
// eslint-disable-next-line import/named
import { Switch, styled, SwitchProps } from '@mui/material';

export const SSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 34,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#664EF9',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
/*       '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      }, */
/*       '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      }, */
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 14,
      height: 14,
    },
    '& .MuiSwitch-track': {
      borderRadius: 100,
      backgroundColor: '#BDBDBD',
      opacity: 0.3,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
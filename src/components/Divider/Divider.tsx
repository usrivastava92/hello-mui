import React from 'react';
import { Divider, styled } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';

export interface DividerProps {
  type: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export const AppDivider = styled(Divider)<DividerProps>(({ theme, type }) => ({
  borderColor: (theme.palette[type] as ColorPartial)['A100']
}));

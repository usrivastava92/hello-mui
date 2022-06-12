import React from 'react';
import { Divider, styled } from '@mui/material';

export interface DividerProps {
  type: 'primary' | 'secondary';
}

export const AppDivider = styled(Divider)<DividerProps>(({ theme, type }) => ({
  borderColor: theme.palette[type].contrastBorder
}));

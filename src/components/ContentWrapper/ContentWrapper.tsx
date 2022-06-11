import React from 'react';
import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(2),
  maxWidth: '100vw',
  minHeight: '100%'
}));

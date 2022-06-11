import React from 'react';
import { Box } from '@mui/material';

interface ContentWrapperProps {
  children: JSX.Element;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        color: 'secondary.contrastText',
        bgcolor: 'secondary.main',
        m: 2,
        p: 1,
        borderRadius: 10,
        maxWidth: '100vw',
        minHeight: '100%'
      }}
    >
      {children}
    </Box>
  );
};

import React from 'react';
import { Box } from '@mui/material';

interface ContentWrapperProps {
  children: JSX.Element;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        m: 2,
        p: 2,
        pt: 0,
        borderRadius: 10,
        minHeight: '96%'
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
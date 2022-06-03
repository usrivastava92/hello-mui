import React from 'react';
import { Box } from '@mui/material';

const ContentWrapper: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        m: 2,
        p: 2,
        borderRadius: 10,
        minHeight: '96%'
      }}
    >
      hello
    </Box>
  );
};

export default ContentWrapper;

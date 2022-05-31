import { Box, CardMedia, IconButton, Stack } from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

export default function MobileMenu(): JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' }
      }}
      component="div"
    >
      <Stack justifyContent="space-between">
        <IconButton size="large" aria-label="open drawer">
          <CardMedia
            component="img"
            height={30}
            alt="Localstack UI"
            className="w-6"
            image="src/assets/images/logo.png"
          />
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
      </Stack>
    </Box>
  );
}

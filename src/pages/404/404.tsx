import { Box, Button, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          height: '100vh',
          textAlign: { xs: 'center', lg: 'left' },
          color: (theme) => theme.palette.primary.contrastText
        }}
      >
        <Box className="-intro-x">
          <CardMedia
            component="img"
            height="450rem"
            alt="Not Found"
            image="/assets/images/error-illustration.svg"
          />
        </Box>
        <Box>
          <Typography fontWeight="bold" variant="6xl" className="intro-x">
            404
          </Typography>
          <Typography
            fontWeight="bold"
            sx={{ typography: { xs: 'xl', lg: '3xl' } }}
            className="intro-x"
          >
            Oops. This page has gone missing.
          </Typography>
          <Typography
            variant="lg"
            className="intro-x"
            sx={{ mt: 1 }}
            component="div"
          >
            You may have mistyped the address or the page may have moved.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              borderColor: (theme) => theme.palette.primary.contrastText,
              color: (theme) => theme.palette.primary.contrastText,
              '&:hover': {
                borderColor: (theme) => theme.palette.primary.contrastText,
                backgroundColor: (theme) => theme.palette.primary.main
              }
            }}
            className="intro-x"
            onClick={() => navigate('/', { replace: true })}
          >
            Back to Home
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

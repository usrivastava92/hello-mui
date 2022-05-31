import {
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound(): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const isLargeDevice = useMediaQuery(theme.breakpoints.up('lg'));
  const isLightMode = (): boolean => theme.palette.mode === 'light';

  return (
    <Box color="white">
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          height: '100vh',
          textAlign: { xs: 'center', lg: 'left' }
        }}
      >
        <Box className="-intro-x">
          <CardMedia
            component="img"
            height="450rem"
            alt="Not Found"
            image="src/assets/images/error-illustration.svg"
          />
        </Box>
        <Box>
          <Typography
            fontWeight="bold"
            variant="6xl"
            className="intro-x"
            component="div"
          >
            404
          </Typography>
          <Typography
            fontWeight="bold"
            variant={isLargeDevice ? '3xl' : 'xl'}
            className="intro-x"
            component="div"
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
              borderColor: isLightMode() ? 'white' : ''
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
}

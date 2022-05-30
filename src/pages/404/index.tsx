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
    <Box>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          height: '100vh',
          textAlign: { xs: 'center', lg: 'left' }
        }}
      >
        <Box className="-intro-x ">
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
            variant="h2"
            className="intro-x"
            component="div"
            color="white"
          >
            404
          </Typography>
          <Typography
            fontWeight="bold"
            variant={isLargeDevice ? 'h4' : 'h6'}
            className="intro-x"
            component="div"
            color="white"
          >
            Oops. This page has gone missing.
          </Typography>
          <Typography
            fontWeight="bold"
            variant="body1"
            className="intro-x"
            sx={{ mt: 1 }}
            component="div"
            color="white"
          >
            You may have mistyped the address or the page may have moved.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              color: 'white',
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

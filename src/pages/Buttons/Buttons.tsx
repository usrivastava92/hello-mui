import {
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  styled,
  Typography
} from '@mui/material';
import React from 'react';

interface ButtonProps {
  color:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'dark';
}

export const Buttons: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div" color="black">
            Basic Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Stack spacing={1} sx={{ m: 2 }}>
            <Button color="primary" variant="contained">
              Primary
            </Button>
            <Button color="dark" variant="contained">
              Dark
            </Button>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
            <Button color="info" variant="contained">
              Info
            </Button>
            <Button color="success" variant="contained">
              Success
            </Button>
            <Button color="warning" variant="contained">
              Warning
            </Button>
            <Button color="error" variant="contained">
              Error
            </Button>
          </Stack>
        </Card>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div" color="black">
            Outlined Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Stack sx={{ m: 2 }} spacing={1}>
            <Button color="primary" variant="outlined">
              Primary
            </Button>
            <Button color="dark" variant="outlined">
              Dark
            </Button>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
            <Button color="info" variant="outlined">
              Info
            </Button>
            <Button color="success" variant="outlined">
              Success
            </Button>
            <Button color="warning" variant="outlined">
              Warning
            </Button>
            <Button color="error" variant="outlined">
              Error
            </Button>
          </Stack>
        </Card>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div" color="black">
            Text Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Stack sx={{ m: 2 }} spacing={1}>
            <Button color="primary" variant="text">
              Primary
            </Button>
            <Button color="dark" variant="text">
              Dark
            </Button>
            <Button color="secondary" variant="text">
              Secondary
            </Button>
            <Button color="info" variant="text">
              Info
            </Button>
            <Button color="success" variant="text">
              Success
            </Button>
            <Button color="warning" variant="text">
              Warning
            </Button>
            <Button color="error" variant="text">
              Error
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

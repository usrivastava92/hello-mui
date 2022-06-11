import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export const Buttons: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div">
            Basic Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Box sx={{ m: 2 }}>
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
          </Box>
        </Card>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div">
            Outlined Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Box sx={{ m: 2 }}>
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
          </Box>
        </Card>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Card sx={{ m: 2 }}>
          <Typography sx={{ m: 2 }} variant="h6" component="div">
            Text Buttons
          </Typography>
          <Divider sx={{ borderColor: 'border.secondary' }} />
          <Box sx={{ m: 2 }}>
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
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

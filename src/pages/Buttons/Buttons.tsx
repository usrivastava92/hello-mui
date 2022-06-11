import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';

export const Buttons: React.FC = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h5" fontWeight="medium">
        Buttons
      </Typography>
      <Grid sx={{ mt: 1 }} container rowSpacing={2} columnSpacing={2}>
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="h6" component="div">
              Basic Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
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
          <Card>
            <Typography sx={{ m: 2 }} variant="h6" component="div">
              Outlined Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
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
          <Card>
            <Typography sx={{ m: 2 }} variant="h6" component="div">
              Text Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
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
    </Box>
  );
};

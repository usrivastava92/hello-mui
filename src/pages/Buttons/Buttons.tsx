import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import { LoadingButton } from '@mui/lab';

export const Buttons: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Buttons
      </Typography>
      <Grid sx={{ mt: 1 }} container rowSpacing={2} columnSpacing={2}>
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Basic Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button color="neutral" variant="contained">
                Neutral
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
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Outlined Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button color="neutral" variant="outlined">
                Neutral
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
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Text Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button color="neutral" variant="text">
                Neutral
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
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Soft Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button color="neutral" variant="soft">
                Neutral
              </Button>
              <Button color="info" variant="soft">
                Info
              </Button>
              <Button color="success" variant="soft">
                Success
              </Button>
              <Button color="warning" variant="soft">
                Warning
              </Button>
              <Button color="error" variant="soft">
                Error
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Size Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button size="small" color="info" variant="contained">
                Small
              </Button>
              <Button size="medium" color="info" variant="contained">
                Medium
              </Button>
              <Button size="large" color="info" variant="contained">
                Large
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Loading State Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button color="info" variant="contained">
                Small
              </Button>
              <Button color="success" variant="contained">
                Medium
              </Button>
              <Button color="warning" variant="contained">
                Large
              </Button>
              <LoadingButton color="error" variant="contained">
                Large
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Card>
            <Typography sx={{ m: 2 }} variant="base" component="div">
              Elevated Buttons
            </Typography>
            <AppDivider type="secondary" />
            <Stack sx={{ m: 2, flexWrap: 'wrap' }} spacing={2}>
              <Button sx={{ boxShadow: 1 }} color="info" variant="contained">
                Elevation 1
              </Button>
              <Button sx={{ boxShadow: 2 }} color="info" variant="contained">
                Elevation 2
              </Button>
              <Button sx={{ boxShadow: 3 }} color="info" variant="contained">
                Elevation 3
              </Button>
              <Button sx={{ boxShadow: 4 }} color="info" variant="contained">
                Elevation 4
              </Button>
              <Button sx={{ boxShadow: 5 }} color="info" variant="contained">
                Elevation 5
              </Button>
              <Button sx={{ boxShadow: 6 }} color="info" variant="contained">
                Elevation 6
              </Button>
              <Button sx={{ boxShadow: 7 }} color="info" variant="contained">
                Elevation 7
              </Button>
              <Button sx={{ boxShadow: 8 }} color="info" variant="contained">
                Elevation 8
              </Button>
              <Button sx={{ boxShadow: 9 }} color="info" variant="contained">
                Elevation 9
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

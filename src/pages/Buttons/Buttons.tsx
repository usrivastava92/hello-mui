import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import {
  ButtonColors,
  ButtonVariants
} from '@/config/theme/components/button.config';

export const Buttons: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Buttons
      </Typography>
      <Grid sx={{ pt: 1 }} container spacing={2}>
        {ButtonVariants.map((variant, index) => (
          <Grid key={index} item sm={12} lg={6}>
            <Card>
              <Typography
                sx={{ m: 2, textTransform: 'capitalize' }}
                variant="base"
                component="div"
              >
                {variant} Buttons
              </Typography>
              <AppDivider type="secondary" />
              <Stack
                sx={{ m: 2, flexWrap: 'wrap' }}
                spacing={2}
                justifyContent="space-evenly"
              >
                {ButtonColors.map((color, index) => (
                  <Button key={index} color={color} variant={variant}>
                    {color}
                  </Button>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
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

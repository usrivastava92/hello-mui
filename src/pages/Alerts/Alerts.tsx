import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import { Alert } from '@mui/lab';
import {
  AlertColors,
  AlertVariants
} from '@/config/theme/components/alert.config';

export const Alerts: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Buttons
      </Typography>
      <Grid sx={{ mt: 1 }} container spacing={2}>
        {AlertVariants.map((variant, index) => (
          <Grid key={index} item sm={12} lg={6}>
            <Card>
              <Typography
                sx={{ m: 2, textTransform: 'capitalize' }}
                variant="base"
                component="div"
              >
                {variant} Alerts
              </Typography>
              <AppDivider type="secondary" />
              <Stack
                sx={{ m: 2, flexWrap: 'wrap' }}
                spacing={2}
                justifyContent="space-evenly"
              >
                {AlertColors.map((color, index) => (
                  <Alert key={index} color={color} variant={variant}>
                    {color}
                  </Alert>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

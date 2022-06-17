import { Alert, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import {
  AlertColors,
  AlertVariants
} from '@/config/theme/components/alert.config';

export const Alerts: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Alerts
      </Typography>
      <Grid sx={{ pt: 1 }} container spacing={2}>
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
              <Grid container spacing={2} sx={{ p: 2 }}>
                {AlertColors.map((color, index) => (
                  <Grid key={index} item xs={12}>
                    <Alert color={color} variant={variant}>
                      {color}
                    </Alert>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

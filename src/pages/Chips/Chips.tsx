import { Card, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import {
  ChipColors,
  ChipVariants
} from '@/config/theme/components/chip.config';

export const Chips: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Chips
      </Typography>
      <Grid sx={{ pt: 1 }} container spacing={2}>
        {ChipVariants.map((variant, index) => (
          <Grid key={index} item sm={12} lg={6}>
            <Card>
              <Typography
                sx={{ m: 2, textTransform: 'capitalize' }}
                variant="base"
                component="div"
              >
                {variant} Chips
              </Typography>
              <AppDivider type="secondary" />
              <Stack
                spacing={2}
                sx={{ p: 2 }}
                justifyContent="space-around"
                flexWrap="wrap"
              >
                {ChipColors.map((color, index) => (
                  <Chip color={color} variant={variant} label={color}></Chip>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

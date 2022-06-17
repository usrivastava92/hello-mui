import { Card, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { AppDivider } from '@/components/Divider';
import {
  TextFieldColors,
  TextFieldVariants
} from '@/config/theme/components/textField.config';

export const Forms: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Form
      </Typography>
      <Grid sx={{ pt: 1 }} container spacing={2}>
        {TextFieldVariants.map((variant, index) => (
          <Grid key={index} item sm={12} lg={6}>
            <Card>
              <Typography
                sx={{ m: 2, textTransform: 'capitalize' }}
                variant="base"
                component="div"
              >
                {variant} Text Inputs
              </Typography>
              <AppDivider type="secondary" />
              <Stack spacing={2} sx={{ p: 2 }} flexWrap="wrap">
                {TextFieldColors.map((color, index) => (
                  <TextField
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    key={index}
                    color={color}
                    variant={variant}
                    label={color}
                  >
                    {color}
                  </TextField>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

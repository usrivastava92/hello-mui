import React from 'react';
import { Box, LinearProgress, Stack, Typography } from '@mui/material';

export interface ProgressBarProps {
  percentage: number;
  startLabel?: string;
  endLabel?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  startLabel,
  endLabel
}) => {
  const LabelStack = (
    <Stack justifyContent="space-between">
      {startLabel && <Typography variant="xs">{startLabel}</Typography>}
      {endLabel && <Typography variant="xs">{endLabel}</Typography>}
    </Stack>
  );
  return (
    <Box sx={{ width: '100%' }}>
      {(startLabel || endLabel) && LabelStack}
      <LinearProgress
        sx={{ width: '100%', mt: 1 }}
        color="info"
        variant="determinate"
        value={percentage}
      />
    </Box>
  );
};

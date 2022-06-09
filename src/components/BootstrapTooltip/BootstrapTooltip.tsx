import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import React from 'react';

export const BootstrapTooltip: React.FC<TooltipProps> = styled(
  ({ className, children, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      arrow
      classes={{ popper: className }}
      children={children}
    />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black
  }
}));

import { Components, PaletteOptions } from '@mui/material';
import { getButtonVariants } from '@/config/theme/components/button.config';
import { getChipVariants } from '@/config/theme/components/chip.config';
import { getAlertVariants } from '@/config/theme/components/alert.config';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
    MuiGrid: {
      defaultProps: {
        sx: {
          height: '100%',
          width: '100%'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      },
      variants: getChipVariants()
    },
    MuiAlert: {
      variants: getAlertVariants()
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 600
        },
        outlined: {
          border: '1.3px solid'
        }
      },
      variants: getButtonVariants()
    },
    MuiBreadcrumbs: {
      defaultProps: {
        color: 'inherit'
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
        elevation: 0
      }
    },
    MuiLink: {
      defaultProps: {
        color: 'inherit',
        underline: 'none'
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            fontWeight: 'bold',
            textDecoration: 'none'
          }
        }
      }
    }
  };
};

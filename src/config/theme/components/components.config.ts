import { Components, PaletteOptions } from '@mui/material';
import { getButtonVariants } from '@/config/theme/components/button.config';
import { getChipVariants } from '@/config/theme/components/chip.config';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
    MuiChip: {
      variants: getChipVariants()
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600
        },
        outlined: {
          border: '1.3px solid'
        }
      },
      defaultProps: {
        sx: {
          boxShadow: 0
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

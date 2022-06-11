import { Components, PaletteOptions } from '@mui/material';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          color: 'inherit',
          backgroundColor: palette.secondary?.lighter
        }
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.border?.primary
        }
      }
    },
    MuiBreadcrumbs: {
      defaultProps: {
        color: 'inherit'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '2.5rem',
          borderRadius: 8
        }
      },
      defaultProps: {
        disableElevation: true
      }
    },
    MuiStack: {
      defaultProps: {
        color: 'inherit',
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
          cursor: 'pointer'
        }
      }
    },
    MuiListItemIcon: {
      defaultProps: {
        color: palette.text?.primary
      }
    }
  };
};

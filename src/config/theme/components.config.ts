import { Components, PaletteOptions } from '@mui/material';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
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
        },
        containedSecondary: {
          borderColor: palette.secondary?.darker,
          color: palette.secondary?.contrastText,
          '&:hover': {
            backgroundColor: palette.secondary?.dark
          }
        },
        outlinedSecondary: {
          borderColor: palette.secondary?.darker,
          color: palette.secondary?.contrastText,
          '&:hover': {
            backgroundColor: palette.secondary?.dark
          }
        },
        textSecondary: {
          color: palette.secondary?.contrastText,
          '&:hover': {
            backgroundColor: palette.secondary?.dark
          }
        }
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

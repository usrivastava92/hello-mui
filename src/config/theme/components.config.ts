import { Components, PaletteOptions } from '@mui/material';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
    MuiDivider: {
      defaultProps: {
        color: palette.border?.main
      },
      styleOverrides: {
        root: {
          borderColor: palette.border?.main
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
          height: '2.9rem',
          color: 'inherit',
          borderColor: palette.border?.main
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        color: 'inherit'
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
    }
  };
};

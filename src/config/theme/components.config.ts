import { Components, PaletteOptions } from '@mui/material';

export const getComponentOptions = (palette: PaletteOptions): Components => {
  return {
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

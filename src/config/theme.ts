import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    border?: {
      main?: string;
    };
  }
}

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#F1F5F8'
  },
  background: {
    default: '#1C3FAA'
  },
  text: {
    primary: '#2d3748',
    secondary: '#fff'
  },
  border: {
    main: '#2e51bb'
  }
};

const darkModePallet: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#293145'
  },
  background: {
    default: '#232a3b'
  },
  text: {
    primary: '#e2e8f0'
  },
  border: {
    main: '#313a55'
  }
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? { ...lightModePallet } : { ...darkModePallet };
};

export const getThemeOptionsByMode = (mode: PaletteMode): ThemeOptions => {
  const palette = getPaletteByMode(mode);
  return {
    palette: palette,
    typography: {
      allVariants: {
        color: 'inherit',
        fontFamily: 'Roboto'
      }
    },
    components: {
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
    }
  };
};

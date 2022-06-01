import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';
import { typographyOptions } from '@/config/theme/typography.config';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface PaletteOptions {
    border?: {
      main?: string;
    };
  }
}

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    100: '#2e51bb',
    lighter: '#2e51bb',
    300: '#2e51bb',
    light: '#2e51bb',
    500: '#1C3FAA',
    main: '#1C3FAA',
    700: '#1A389F',
    dark: '#1A389F',
    900: '#142C91',
    darker: '#142C91'
  },
  secondary: {
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
    100: '#313a55',
    lighter: '#313a55',
    300: '#313a55',
    light: '#313a55',
    500: '#232a3b',
    main: '#232a3b',
    700: '#1e2533',
    dark: '#1e2533',
    900: '#181f29',
    darker: '#181f29'
  },
  secondary: {
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
    typography: typographyOptions,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
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

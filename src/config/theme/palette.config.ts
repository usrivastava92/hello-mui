import { PaletteMode, PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface TypeBackground {
    secondary?: string;
  }

  interface PaletteOptions {
    border?: {
      primary?: string;
      secondary?: string;
    };
  }
}

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    100: '#3151BC',
    lighter: '#3151BC',
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
    100: '#fff',
    lighter: '#fff',
    300: '#2e51bb',
    light: '#2e51bb',
    500: '#F1F5F8',
    main: '#F1F5F8',
    700: '#D2DFEA',
    dark: '#D2DFEA',
    900: '#142C91',
    darker: '#142C91'
  },
  background: {
    default: '#1C3FAA',
    secondary: '#F1F5F8'
  },
  text: {
    primary: '#fff',
    secondary: '#2d3748'
  },
  border: {
    primary: '#2e51bb',
    secondary: '#dee7ef'
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
    100: '#313a55',
    lighter: '#313a55',
    300: '#313a55',
    light: '#313a55',
    500: '#293145',
    main: '#293145',
    700: '#1e2533',
    dark: '#1e2533',
    900: '#181f29',
    darker: '#181f29'
  },
  background: {
    default: '#232a3b',
    secondary: '#293145'
  },
  text: {
    primary: '#e2e8f0'
  },
  border: {
    primary: '#313a55'
  }
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? lightModePallet : darkModePallet;
};

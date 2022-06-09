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

const commonPaletteOptions: PaletteOptions = {
  info: {
    lighter: '#fff',
    light: '#F1F5F8',
    main: '#3160D8',
    dark: '#D2DFEA',
    darker: '#607F96'
  },
  success: {
    lighter: '#fff',
    light: '#D8F8BC',
    main: '#91C714',
    dark: '#D2DFEA',
    darker: '#607F96'
  },
  warning: {
    lighter: '#fff',
    light: '#FBC500',
    main: '#F78B00',
    dark: '#D2DFEA',
    darker: '#607F96'
  },
  error: {
    lighter: '#fff',
    light: '#ffd8d8',
    main: '#D32929',
    dark: '#D2DFEA',
    darker: '#607F96'
  }
};

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    lighter: '#3151BC',
    light: '#2e51bb',
    main: '#1C3FAA',
    dark: '#1A389F',
    darker: '#142C91'
  },
  secondary: {
    lighter: '#fff',
    light: '#F1F5F8',
    main: '#F1F5F8',
    dark: '#D2DFEA',
    darker: '#607F96'
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
  },
  ...commonPaletteOptions
};

const darkModePallet: PaletteOptions = {
  mode: 'dark',
  primary: {
    lighter: '#313a55',
    light: '#313a55',
    main: '#232a3b',
    dark: '#1e2533',
    darker: '#181f29'
  },
  secondary: {
    lighter: '#313a55',
    light: '#313a55',
    main: '#293145',
    dark: '#1e2533',
    darker: '#181f29'
  },
  background: {
    default: '#232a3b',
    secondary: '#293145'
  },
  text: {
    primary: '#fff',
    secondary: '#e2e8f0'
  },
  border: {
    primary: '#313a55',
    secondary: '#313a55'
  },
  ...commonPaletteOptions
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? lightModePallet : darkModePallet;
};

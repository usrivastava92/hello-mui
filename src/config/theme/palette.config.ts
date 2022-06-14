import { PaletteMode, PaletteOptions } from '@mui/material';
import { PaletteColorOptions } from '@mui/material/styles';
import { amber, grey, lightGreen, red } from '@mui/material/colors';
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip';

declare module '@mui/material/styles' {
  interface Palette {
    dark: PaletteColor;
  }

  interface PaletteColor {
    contrastText: string;
    contrastBorder: string;
  }

  interface PaletteColorOptions {
    lighter?: string;
    light?: string;
    main: string;
    dark?: string;
    darker?: string;
    contrastText?: string;
    contrastBorder?: string;
  }

  interface PaletteOptions {
    dark?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

const commonPaletteOptions: PaletteOptions = {
  info: {
    lighter: '#fff',
    light: '#3160D8',
    main: '#1C3FAA',
    contrastText: '#fff'
  },
  success: {
    lighter: lightGreen[100],
    light: lightGreen[300],
    main: lightGreen[500],
    dark: lightGreen[700],
    darker: lightGreen[900],
    contrastText: '#fff'
  },
  warning: {
    lighter: amber[400],
    light: amber[500],
    main: amber[600],
    dark: amber[700],
    darker: amber[800],
    contrastText: '#fff'
  },
  error: {
    lighter: red[500],
    light: red[600],
    main: red[700],
    dark: red[800],
    darker: red[900],
    contrastText: '#fff'
  }
};

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    lighter: '#3151BC',
    light: '#2047c0',
    main: '#1C3FAA',
    dark: '#183794',
    darker: '#152f7e',
    contrastText: '#fff',
    contrastBorder: '#2e51bb'
  },
  secondary: {
    lighter: '#fff',
    light: '#f2f5f7',
    main: '#F1F5F8',
    dark: '#e0e9f0',
    darker: '#cfdde7',
    contrastText: '#2d3748',
    contrastBorder: '#dee7ef'
  },
  dark: {
    lighter: grey[300],
    light: grey[400],
    main: grey[500],
    dark: grey[600],
    darker: grey[700],
    contrastText: '#fff'
  },
  background: {
    default: '#1C3FAA'
  },
  text: {
    primary: '#fff'
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
    darker: '#181f29',
    contrastText: '#fff',
    contrastBorder: '#313a55'
  },
  secondary: {
    lighter: '#313a55',
    light: '#313a55',
    main: '#293145',
    dark: '#1e2533',
    darker: '#181f29',
    contrastText: '#fff',
    contrastBorder: '#3f4865'
  },
  dark: {
    lighter: grey[300],
    light: grey[400],
    main: grey[500],
    dark: grey[600],
    darker: grey[700],
    contrastText: '#fff'
  },
  background: {
    default: '#232a3b'
  },
  text: {
    primary: '#fff'
  },
  ...commonPaletteOptions
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? lightModePallet : darkModePallet;
};

import { PaletteMode, PaletteOptions } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

const commonPaletteOptions: PaletteOptions = {
  info: {
    50: '#e6f3ff',
    100: '#b5d3fa',
    200: '#84b3f5',
    300: '#5a88df',
    400: '#325ac4',
    500: '#1C3FAA',
    600: '#1a3b9f',
    700: '#183692',
    800: '#163388',
    900: '#152f7e',
    main: '#1C3FAA',
    contrastText: '#fff'
  },
  success: {
    50: '#d8f8bc',
    100: '#caef7b',
    200: '#bce63a',
    300: '#abda23',
    400: '#9acd19',
    500: '#8ac110',
    600: '#7cb607',
    700: '#71ab04',
    800: '#6c9d0e',
    900: '#678f18',
    main: '#8ac110',
    contrastText: '#fff'
  },
  warning: {
    50: '#ffefd9',
    100: '#ffe7a4',
    200: '#ffe06f',
    300: '#fed641',
    400: '#fccb16',
    500: '#f6c100',
    600: '#ecb900',
    700: '#dfaf00',
    800: '#cc9d01',
    900: '#b98b02',
    main: '#f6c100',
    contrastText: '#fff'
  },
  error: {
    50: '#ffd8d8',
    100: '#faa1a1',
    200: '#f46b6b',
    300: '#e84c4c',
    400: '#da3535',
    500: '#d32929',
    600: '#c01a1a',
    700: '#b31111',
    800: '#a40808',
    900: '#950000',
    main: '#d32929',
    contrastText: '#fff'
  }
};

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    50: '#ffffff',
    100: '#8d9eda',
    200: '#2f50bc',
    300: '#264abf',
    400: '#1e43b6',
    500: '#1C3FAA',
    600: '#183794',
    700: '#183794',
    800: '#17338a',
    900: '#152f7e',
    main: '#1C3FAA',
    A100: '#2f50bc',
    contrastText: '#fff'
  },
  secondary: {
    50: '#ffffff',
    100: '#f9fbfb',
    200: '#f3f6f8',
    300: '#f2f5f7',
    400: '#f1f5f8',
    500: '#edf2f6',
    600: '#e6edf3',
    700: '#dee8ef',
    800: '#d7e2eb',
    900: '#cfdde7',
    main: '#edf2f6',
    contrastText: '#2d3748'
  },
  background: {
    paper: '#ffffff',
    default: '#1C3FAA'
  },
  text: {
    primary: '#2d3748',
    secondary: '#fff',
    disabled: '#cfdde7'
  },
  ...commonPaletteOptions
};

const darkModePallet: PaletteOptions = {
  mode: 'dark',
  primary: {
    50: '#313a55',
    100: '#313a55',
    200: '#313a55',
    300: '#2c354c',
    400: '#262e41',
    500: '#232a3b',
    600: '#202736',
    700: '#1d2432',
    800: '#1b222d',
    900: '#181f29',
    main: '#232a3b',
    contrastText: '#fff'
  },
  secondary: {
    50: '#313a55',
    100: '#313a55',
    200: '#313a55',
    300: '#2c354c',
    400: '#262e41',
    500: '#293145',
    600: '#202736',
    700: '#1d2432',
    800: '#1b222d',
    900: '#181f29',
    A100: '#313a55',
    main: '#293145',
    contrastText: '#fff'
  },
  background: {
    paper: '#313a55',
    default: '#232a3b'
  },
  text: {
    disabled: '',
    secondary: '#fff',
    primary: '#fff'
  },
  ...commonPaletteOptions
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? lightModePallet : darkModePallet;
};

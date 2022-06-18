import { PaletteMode, PaletteOptions } from '@mui/material';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface PaletteColor {
    neutral: string;
    transparent: string;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    transparent?: PaletteColorOptions;
  }

  interface Palette {
    neutral: PaletteColorOptions;
    transparent: PaletteColorOptions;
  }
}

const commonPaletteOptions: PaletteOptions = {
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
    contrastText: '#2E3849'
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
  info: {
    50: '#e6f3ff',
    100: '#96aff0',
    200: '#476be1',
    300: '#2b51cc',
    400: '#2145b5',
    500: '#1c3daa',
    600: '#1d3aaa',
    700: '#1a38aa',
    800: '#0d37ac',
    900: '#0036ad',
    main: '#1c3daa',
    contrastText: '#fff'
  },
  transparent: {
    50: 'rgba(0,0,0,0)',
    100: 'rgba(0,0,0,0)',
    200: 'rgba(0,0,0,0)',
    300: 'rgba(0,0,0,0)',
    400: 'rgba(0,0,0,0)',
    500: 'rgba(0,0,0,0)',
    600: 'rgba(0,0,0,0)',
    700: 'rgba(0,0,0,0)',
    800: 'rgba(0,0,0,0)',
    900: 'rgba(0,0,0,0)',
    main: 'rgba(0,0,0,0)',
    contrastText: '#2d3748'
  },
  neutral: {
    50: '#edf2f6',
    100: '#b4bbca',
    200: '#7b859d',
    300: '#677089',
    400: '#5e667d',
    500: '#52596e',
    600: '#434a5b',
    700: '#373e4c',
    800: '#323b4a',
    900: '#2d3748',
    main: '#52596e',
    contrastText: '#fff'
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
    contrastText: '#E1E7EF'
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
  info: {
    50: '#e6f3ff',
    100: '#b2ccff',
    200: '#7da5ff',
    300: '#5b87f2',
    400: '#3f6de1',
    500: '#3160D8',
    600: '#1d4fd7',
    700: '#1144d2',
    800: '#083dc0',
    900: '#0036ad',
    main: '#3160D8',
    contrastText: '#fff'
  },
  neutral: {
    50: '#edf2f6',
    100: '#b4bbca',
    200: '#7b859d',
    300: '#677089',
    400: '#5e667d',
    500: '#52596e',
    600: '#434a5b',
    700: '#373e4c',
    800: '#323b4a',
    900: '#2d3748',
    main: '#52596e',
    contrastText: '#E1E7EF'
  },
  transparent: {
    50: 'rgba(0,0,0,0)',
    100: 'rgba(0,0,0,0)',
    200: 'rgba(0,0,0,0)',
    300: 'rgba(0,0,0,0)',
    400: 'rgba(0,0,0,0)',
    500: 'rgba(0,0,0,0)',
    600: 'rgba(0,0,0,0)',
    700: 'rgba(0,0,0,0)',
    800: 'rgba(0,0,0,0)',
    900: 'rgba(0,0,0,0)',
    main: 'rgba(0,0,0,0)',
    contrastText: '#E1E7EF'
  },
  ...commonPaletteOptions
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? lightModePallet : darkModePallet;
};

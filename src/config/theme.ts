import { PaletteMode, PaletteOptions } from '@mui/material';

const lightModePallet: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1C3FAA',
    contrastText: '#fff'
  },
  background: {
    default: '#1C3FAA'
  },
  text: {
    primary: '#fff'
  }
};

const darkModePallet: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#232a3b'
  },
  text: {
    primary: '#fff'
  }
};

export const getPaletteByMode = (mode: PaletteMode) => {
  return mode === 'light' ? { ...lightModePallet } : { ...darkModePallet };
};

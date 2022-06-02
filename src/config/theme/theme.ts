import { PaletteMode, ThemeOptions } from '@mui/material';
import { TYPOGRAPHY_OPTIONS } from '@/config/theme/typography.config';
import { getPaletteByMode } from '@/config/theme/palette.config';
import { getComponentOptions } from '@/config/theme/components.config';

const getTheme = (mode: PaletteMode): ThemeOptions => {
  const palette = getPaletteByMode(mode);
  return {
    palette: palette,
    typography: TYPOGRAPHY_OPTIONS,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
    components: getComponentOptions(palette)
  };
};

const DARK_THEME: ThemeOptions = getTheme('dark');
const LIGHT_THEME: ThemeOptions = getTheme('light');

export const getThemeOptionsByMode = (mode: PaletteMode): ThemeOptions => {
  return mode === 'light' ? LIGHT_THEME : DARK_THEME;
};

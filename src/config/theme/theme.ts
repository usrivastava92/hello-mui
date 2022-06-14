import { PaletteMode, ThemeOptions } from '@mui/material';
import { TYPOGRAPHY_OPTIONS } from '@/config/theme/typography.config';
import { getPaletteByMode } from '@/config/theme/palette.config';
import { getComponentOptions } from '@/config/theme/components.config';
import shadows, { Shadows } from '@mui/material/styles/shadows';

const SHADOW_OVERRIDES = [
  'none',
  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '0 25px 50px -12px rgb(0 0 0 / 0.25)'
];

const getTheme = (mode: PaletteMode): ThemeOptions => {
  const palette = getPaletteByMode(mode);
  return {
    shadows: shadows.map((value, index) => {
      if (index < SHADOW_OVERRIDES.length) {
        return SHADOW_OVERRIDES[index];
      }
      return value;
    }) as Shadows,
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

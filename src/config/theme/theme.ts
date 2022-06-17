import { PaletteMode, ThemeOptions } from '@mui/material';
import { TYPOGRAPHY_OPTIONS } from '@/config/theme/typography.config';
import { getPaletteByMode } from '@/config/theme/palette.config';
import { getComponentOptions } from '@/config/theme/components/components.config';
import { SHADOW_OPTIONS } from '@/config/theme/shadow.config';
import { BREAKPOINT_OPTIONS } from '@/config/theme/breakpoint.config';

const getTheme = (mode: PaletteMode): ThemeOptions => {
  const palette = getPaletteByMode(mode);
  return {
    palette: palette,
    shadows: SHADOW_OPTIONS,
    typography: TYPOGRAPHY_OPTIONS,
    breakpoints: BREAKPOINT_OPTIONS,
    components: getComponentOptions(palette)
  };
};

const DARK_THEME: ThemeOptions = getTheme('dark');
const LIGHT_THEME: ThemeOptions = getTheme('light');

export const getThemeOptionsByMode = (mode: PaletteMode): ThemeOptions => {
  return mode === 'light' ? LIGHT_THEME : DARK_THEME;
};

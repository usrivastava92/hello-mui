import { alpha, Interpolation } from '@mui/material';
import { ColorPartial, SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { ComponentsPropsList } from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }

  interface ChipPropsColorOverrides {
    neutral: true;
  }
}

export const ChipVariants = ['outlined', 'soft', 'filled'] as const;
export const ChipColors = ['primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'neutral'] as const;
type ChipColorsType = typeof ChipColors[number];
type ChipVariantProps = {
  props: Partial<ComponentsPropsList['MuiChip']>;
  style: Interpolation<{ theme: Theme }>;
};

const softVariant = (color: ChipColorsType): ChipVariantProps => {
  switch (color) {
    case 'primary':
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).contrastText,
          backgroundColor: alpha((theme.palette[color] as ColorPartial)['200']!, 0.8)
        })
      };
    case 'secondary':
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).contrastText,
          backgroundColor: (theme.palette[color] as ColorPartial)['400']
        })
      };
    default:
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as ColorPartial)['900'],
          backgroundColor: (theme.palette[color] as ColorPartial)['50']
        })
      };
  }
};

const filledVariant = (color: ChipColorsType): ChipVariantProps => {
  switch (color) {
    default:
      return {
        props: { variant: 'filled', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).contrastText
        })
      };
  }
};

const outlinedVariant = (color: ChipColorsType): ChipVariantProps => {
  switch (color) {
    case 'secondary':
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          borderColor: (theme.palette[color] as ColorPartial)['900'],
          color: (theme.palette[color] as SimplePaletteColorOptions).contrastText
        })
      };
    default:
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main
        })
      };
  }
};

export const getChipVariants = (): ChipVariantProps[] => {
  const variants: ChipVariantProps[] = [];
  ChipVariants.forEach((variant) => {
    switch (variant) {
      case 'outlined':
        ChipColors.forEach((color) => variants.push(filledVariant(color)));
        break;
      case 'soft':
        ChipColors.forEach((color) => variants.push(outlinedVariant(color)));
        break;
      case 'filled':
        ChipColors.forEach((color) => variants.push(softVariant(color)));
        break;
    }
  });
  return variants;
};

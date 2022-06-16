import { Interpolation } from '@mui/material';
import {
  ColorPartial,
  SimplePaletteColorOptions
} from '@mui/material/styles/createPalette';
import { ComponentsPropsList } from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }

  interface ChipPropsColorOverrides {
    neutral: true;
    primary: false;
    secondary: false;
  }
}

const ChipVariants = ['outlined', 'soft', 'filled'] as const;
const ButtonColors = ['info', 'success', 'warning', 'error'] as const;
type ButtonColorsType = typeof ButtonColors[number];
type ChipVariantProps = {
  props: Partial<ComponentsPropsList['MuiChip']>;
  style: Interpolation<{ theme: Theme }>;
};

const softVariant = (color: ButtonColorsType): ChipVariantProps => {
  return {
    props: { variant: 'soft', color: color },
    style: ({ theme }) => ({
      fontWeight: 500,
      color: (theme.palette[color] as ColorPartial)['900'],
      backgroundColor: (theme.palette[color] as ColorPartial)['50']
    })
  };
};

const filledVariant = (color: ButtonColorsType): ChipVariantProps => {
  return {
    props: { variant: 'filled', color: color },
    style: ({ theme }) => ({
      color: (theme.palette[color] as SimplePaletteColorOptions).contrastText
    })
  };
};

const outlinedVariant = (color: ButtonColorsType): ChipVariantProps => {
  return {
    props: { variant: 'outlined', color: color },
    style: ({ theme }) => ({
      color: (theme.palette[color] as SimplePaletteColorOptions).main
    })
  };
};

export const getChipVariants = (): ChipVariantProps[] => {
  const variants: ChipVariantProps[] = [];
  ChipVariants.forEach((variant) => {
    switch (variant) {
      case 'outlined':
        ButtonColors.forEach((color) => variants.push(filledVariant(color)));
        break;
      case 'soft':
        ButtonColors.forEach((color) => variants.push(outlinedVariant(color)));
        break;
      case 'filled':
        ButtonColors.forEach((color) => variants.push(softVariant(color)));
        break;
    }
  });
  return variants;
};
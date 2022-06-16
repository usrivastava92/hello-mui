import { alpha, Interpolation } from '@mui/material';
import {
  ColorPartial,
  SimplePaletteColorOptions
} from '@mui/material/styles/createPalette';
import { ComponentsPropsList } from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }

  interface ButtonPropsColorOverrides {
    neutral: true;
    transparent: true;
  }
}

export const ButtonVariants = [
  'text',
  'outlined',
  'contained',
  'soft'
] as const;
export const ButtonColors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'neutral',
  'transparent'
] as const;
type ButtonColorsType = typeof ButtonColors[number];
type ButtonVariantProps = {
  props: Partial<ComponentsPropsList['MuiButton']>;
  style: Interpolation<{ theme: Theme }>;
};

const softVariant = (color: ButtonColorsType): ButtonVariantProps => {
  switch (color) {
    case 'secondary':
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: alpha(
            (theme.palette[color] as SimplePaletteColorOptions).contrastText!,
            0.8
          ),
          backgroundColor: (theme.palette[color] as ColorPartial)['50']
        })
      };
    case 'transparent':
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: alpha(
            (theme.palette[color] as SimplePaletteColorOptions).contrastText!,
            0.8
          ),
          backgroundColor: (theme.palette[color] as ColorPartial)['50'],
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['100']!,
              0.02
            )
          }
        })
      };
    default:
      return {
        props: { variant: 'soft', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as ColorPartial)['900'],
          backgroundColor: (theme.palette[color] as ColorPartial)['50'],
          '&:hover': {
            backgroundColor: (theme.palette[color] as ColorPartial)['100']
          }
        })
      };
  }
};

const textVariant = (color: ButtonColorsType): ButtonVariantProps => {
  switch (color) {
    case 'primary':
      return {
        props: { variant: 'text', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main,
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['100']!,
              0.2
            )
          }
        })
      };
    case 'secondary':
      return {
        props: { variant: 'text', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          '&:hover': {
            backgroundColor: (theme.palette[color] as ColorPartial)['200']
          }
        })
      };
    case 'transparent':
      return {
        props: { variant: 'text', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['50']!,
              0.1
            )
          }
        })
      };
    default:
      return {
        props: { variant: 'text', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main,
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['50']!,
              0.4
            )
          }
        })
      };
  }
};

const containedVariant = (color: ButtonColorsType): ButtonVariantProps => {
  switch (color) {
    case 'secondary':
      return {
        props: { variant: 'contained', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          backgroundColor: (theme.palette[color] as ColorPartial)['50'],
          '&:hover': {
            backgroundColor: (theme.palette[color] as ColorPartial)['50']
          }
        })
      };
    default:
      return {
        props: { variant: 'contained', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          backgroundColor: (theme.palette[color] as SimplePaletteColorOptions)
            .main
        })
      };
  }
};

const outlinedVariant = (color: ButtonColorsType): ButtonVariantProps => {
  switch (color) {
    case 'primary':
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main,
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['100']!,
              0.5
            )
          }
        })
      };
    case 'secondary':
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          '&:hover': {
            backgroundColor: (theme.palette[color] as ColorPartial)['100']
          }
        })
      };
    case 'transparent':
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          '&:hover': {
            backgroundColor: (theme.palette[color] as ColorPartial)['50'],
            borderColor: (theme.palette[color] as SimplePaletteColorOptions)
              .contrastText
          }
        })
      };
    default:
      return {
        props: { variant: 'outlined', color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main,
          '&:hover': {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['50']!,
              0.5
            )
          }
        })
      };
  }
};

export const getButtonVariants = (): ButtonVariantProps[] => {
  const variants: ButtonVariantProps[] = [];
  ButtonVariants.forEach((variant) => {
    switch (variant) {
      case 'text':
        ButtonColors.forEach((color) => variants.push(textVariant(color)));
        break;
      case 'outlined':
        ButtonColors.forEach((color) => variants.push(outlinedVariant(color)));
        break;
      case 'contained':
        ButtonColors.forEach((color) => variants.push(containedVariant(color)));
        break;
      case 'soft':
        ButtonColors.forEach((color) => variants.push(softVariant(color)));
        break;
    }
  });
  return variants;
};

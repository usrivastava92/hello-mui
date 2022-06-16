import { alpha, Interpolation } from '@mui/material';
import {
  ColorPartial,
  SimplePaletteColorOptions
} from '@mui/material/styles/createPalette';
import { ComponentsPropsList } from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    soft: true;
  }

  interface AlertPropsColorOverrides {
    primary: true;
    secondary: true;
    neutral: true;
    transparent: true;
  }
}

export const AlertVariants = [
  'filled',
  'outlined',
  'soft',
  'standard'
] as const;
export const AlertColors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'neutral',
  'transparent'
] as const;
type AlertColorsType = typeof AlertColors[number];
type AlertVariantProps = {
  props: Partial<ComponentsPropsList['MuiAlert']>;
  style: Interpolation<{ theme: Theme }>;
};

const softVariant = (color: AlertColorsType): AlertVariantProps => {
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

const standardVariant = (color: AlertColorsType): AlertVariantProps => {
  const variant = 'standard';
  switch (color) {
    case 'primary':
      return {
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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

const filledVariant = (color: AlertColorsType): AlertVariantProps => {
  const variant = 'filled';
  switch (color) {
    case 'secondary':
      return {
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText,
          backgroundColor: (theme.palette[color] as SimplePaletteColorOptions)
            .main
        })
      };
  }
};

const outlinedVariant = (color: AlertColorsType): AlertVariantProps => {
  const variant = 'outlined';
  switch (color) {
    case 'primary':
      return {
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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
        props: { variant: variant, color: color },
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

export const getAlertVariants = (): AlertVariantProps[] => {
  const variants: AlertVariantProps[] = [];
  AlertVariants.forEach((variant) => {
    switch (variant) {
      case 'standard':
        AlertColors.forEach((color) => variants.push(standardVariant(color)));
        break;
      case 'outlined':
        AlertColors.forEach((color) => variants.push(outlinedVariant(color)));
        break;
      case 'filled':
        AlertColors.forEach((color) => variants.push(filledVariant(color)));
        break;
      case 'soft':
        AlertColors.forEach((color) => variants.push(softVariant(color)));
        break;
    }
  });
  return variants;
};

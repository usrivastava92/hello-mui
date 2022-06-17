import { alpha, Interpolation } from '@mui/material';
import {
  ColorPartial,
  SimplePaletteColorOptions
} from '@mui/material/styles/createPalette';
import {
  ComponentsProps,
  ComponentsPropsList
} from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsVariants } from '@mui/material/styles/variants';

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    soft: true;
  }

  interface AlertPropsColorOverrides {
    primary: true;
    secondary: true;
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
  'error'
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

const standardVariant = (color: AlertColorsType): AlertVariantProps => {
  const variant = 'standard';
  switch (color) {
    case 'secondary':
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText
        })
      };
    default:
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main
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
          backgroundColor: (theme.palette[color] as ColorPartial)['50']
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
    case 'secondary':
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          borderColor: alpha(
            (theme.palette[color] as SimplePaletteColorOptions).contrastText!,
            0.5
          ),
          color: (theme.palette[color] as SimplePaletteColorOptions)
            .contrastText
        })
      };
    default:
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          color: (theme.palette[color] as SimplePaletteColorOptions).main
        })
      };
  }
};

const getAlertVariants = (): AlertVariantProps[] => {
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

export const ALERT_OPTIONS: {
  defaultProps?: ComponentsProps['MuiAlert'];
  styleOverrides?: ComponentsOverrides['MuiAlert'];
  variants?: ComponentsVariants['MuiAlert'];
} = {
  variants: getAlertVariants()
};

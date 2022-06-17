import { alpha, Interpolation } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';
import {
  ComponentsProps,
  ComponentsPropsList
} from '@mui/material/styles/props';
import { Theme } from '@mui/material/styles/createTheme';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsVariants } from '@mui/material/styles/variants';

export const TextFieldVariants = ['filled', 'outlined', 'standard'] as const;
export const TextFieldColors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error'
] as const;
type TextFieldColorsType = typeof TextFieldColors[number];
type TextFieldVariantProps = {
  props: Partial<ComponentsPropsList['MuiTextField']>;
  style: Interpolation<{ theme: Theme }>;
};

const standardVariant = (color: TextFieldColorsType): TextFieldVariantProps => {
  const variant = 'standard';
  switch (color) {
    default:
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          '& label': {
            fontWeight: 400,
            color: (theme.palette[color] as ColorPartial)['500']
          },
          '& label.Mui-focused': {
            fontWeight: 500
          },
          '& .MuiInput-underline:before': {
            borderColor: (theme.palette[color] as ColorPartial)['500']
          },
          '& .MuiInput-underline:after': {
            borderColor: (theme.palette[color] as ColorPartial)['500']
          },
          '& .MuiStandardInput-root': {
            '& fieldset': {
              borderWidth: 1.5,
              borderColor: (theme.palette[color] as ColorPartial)['500']
            },
            '&:hover fieldset': {
              borderColor: (theme.palette[color] as ColorPartial)['100']
            },
            '&.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: alpha(
                (theme.palette[color] as ColorPartial)['500']!,
                0.6
              )
            }
          }
        })
      };
  }
};

const filledVariant = (color: TextFieldColorsType): TextFieldVariantProps => {
  const variant = 'filled';
  switch (color) {
    default:
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          input: {
            backgroundColor: alpha(
              (theme.palette[color] as ColorPartial)['50']!,
              0.5
            ),
            color: (theme.palette[color] as ColorPartial)['500']
          },
          '& label': {
            fontWeight: 400,
            color: (theme.palette[color] as ColorPartial)['500']
          },
          '& label.Mui-focused': {
            fontWeight: 500
          },
          '& .MuiInput-underline': {},
          '& .MuiFilledInput-underline:before': {
            borderBottom: 0
          },
          '& .MuiFilledInput-underline:after': {
            borderBottom: 0
          },
          '& .MuiFilledInput-root': {
            borderBottom: 0,
            '& fieldset': {
              borderWidth: 1.5,
              borderColor: (theme.palette[color] as ColorPartial)['500']
            },
            '&:hover fieldset': {
              borderColor: (theme.palette[color] as ColorPartial)['100']
            },
            '&.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: alpha(
                (theme.palette[color] as ColorPartial)['500']!,
                0.6
              )
            }
          }
        })
      };
  }
};

const outlinedVariant = (color: TextFieldColorsType): TextFieldVariantProps => {
  const variant = 'outlined';
  switch (color) {
    default:
      return {
        props: { variant: variant, color: color },
        style: ({ theme }) => ({
          input: {
            color: (theme.palette[color] as ColorPartial)['500']
          },
          '& label': {
            fontWeight: 400,
            color: (theme.palette[color] as ColorPartial)['500']
          },
          '& label.Mui-focused': {
            fontWeight: 500
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: 1.5,
              borderColor: (theme.palette[color] as ColorPartial)['500']
            },
            '&:hover fieldset': {
              borderColor: (theme.palette[color] as ColorPartial)['100']
            },
            '&.Mui-focused fieldset': {
              borderWidth: 3,
              borderColor: alpha(
                (theme.palette[color] as ColorPartial)['500']!,
                0.6
              )
            }
          }
        })
      };
  }
};

const getTextFieldVariants = (): TextFieldVariantProps[] => {
  const variants: TextFieldVariantProps[] = [];
  TextFieldVariants.forEach((variant) => {
    switch (variant) {
      case 'filled':
        TextFieldColors.forEach((color) => variants.push(filledVariant(color)));
        break;
      case 'standard':
        TextFieldColors.forEach((color) =>
          variants.push(standardVariant(color))
        );
        break;
      case 'outlined':
        TextFieldColors.forEach((color) =>
          variants.push(outlinedVariant(color))
        );
        break;
    }
  });
  return variants;
};

export const TEXT_FIELD_OPTIONS: {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
} = {
  defaultProps: {
    color: 'secondary',
    sx: {
      m: 2
    }
  },
  styleOverrides: {
    root: {
      '& fieldset': {
        borderRadius: '0.5rem'
      }
    }
  },
  variants: getTextFieldVariants()
};

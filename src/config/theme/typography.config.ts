import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    '2xl': true;
    '3xl': true;
    '4xl': true;
    '5xl': true;
    '6xl': true;
    '7xl': true;
    '8xl': true;
    '9xl': true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    '2xl': React.CSSProperties;
    '3xl': React.CSSProperties;
    '4xl': React.CSSProperties;
    '5xl': React.CSSProperties;
    '6xl': React.CSSProperties;
    '7xl': React.CSSProperties;
    '8xl': React.CSSProperties;
    '9xl': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    xs?: React.CSSProperties;
    sm?: React.CSSProperties;
    base?: React.CSSProperties;
    lg?: React.CSSProperties;
    xl?: React.CSSProperties;
    '2xl'?: React.CSSProperties;
    '3xl'?: React.CSSProperties;
    '4xl'?: React.CSSProperties;
    '5xl'?: React.CSSProperties;
    '6xl'?: React.CSSProperties;
    '7xl'?: React.CSSProperties;
    '8xl'?: React.CSSProperties;
    '9xl'?: React.CSSProperties;
  }
}

export const typographyOptions: TypographyOptions = {
  fontSize: 13,
  fontFamily: 'Roboto',
  fontWeightLight: 300,
  fontWeightRegular: 410,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  xs: {
    fontSize: '0.75rem',
    lineHeight: '1rem'
  },
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
  },
  base: {
    fontSize: '1rem',
    lineHeight: '1.5rem'
  },
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem'
  },
  xl: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem'
  },
  '2xl': {
    fontSize: '1.5rem',
    lineHeight: '2rem'
  },
  '3xl': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem'
  },
  '4xl': {
    fontSize: '2.25rem',
    lineHeight: '2.5rem'
  },
  '5xl': {
    fontSize: '3rem',
    lineHeight: '1'
  },
  '6xl': {
    fontSize: '3.75rem',
    lineHeight: '1'
  },
  '7xl': {
    fontSize: '4.5rem',
    lineHeight: '1'
  },
  '8xl': {
    fontSize: '6rem',
    lineHeight: '1'
  },
  '9xl': {
    fontSize: '8rem',
    lineHeight: '1'
  }
};

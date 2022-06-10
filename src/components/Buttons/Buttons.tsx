import {
  Button,
  ButtonProps,
  capitalize,
  createStyles,
  makeStyles,
  styled
} from '@mui/material';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'default'
  | 'inherit'
  | 'info';

const B = styled(Button);

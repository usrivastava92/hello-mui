import { Components } from '@mui/material';
import { BUTTON_OPTIONS } from '@/config/theme/components/button.config';
import { CHIP_OPTIONS } from '@/config/theme/components/chip.config';
import { ALERT_OPTIONS } from '@/config/theme/components/alert.config';
import { TEXT_FIELD_OPTIONS } from '@/config/theme/components/textField.config';

export const getComponentOptions = (): Components => {
  return {
    MuiTextField: TEXT_FIELD_OPTIONS,
    MuiChip: CHIP_OPTIONS,
    MuiAlert: ALERT_OPTIONS,
    MuiButton: BUTTON_OPTIONS,
    MuiBreadcrumbs: {
      defaultProps: {
        color: 'inherit'
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
        elevation: 0
      }
    },
    MuiLink: {
      defaultProps: {
        color: 'inherit',
        underline: 'none'
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            fontWeight: 'bold',
            textDecoration: 'none'
          }
        }
      }
    }
  };
};

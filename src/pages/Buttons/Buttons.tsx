import { Button } from '@mui/material';
import React from 'react';

export const Buttons: React.FC = () => {
  return (
    <>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button color="info" variant="contained">
        Info
      </Button>
      <Button color="success" variant="contained">
        Success
      </Button>
      <Button color="warning" variant="contained">
        Warning
      </Button>
      <Button color="error" variant="contained">
        Error
      </Button>
      <Button color="primary" variant="outlined">
        Primary
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <Button color="info" variant="outlined">
        Info
      </Button>
      <Button color="success" variant="outlined">
        Success
      </Button>
      <Button color="warning" variant="outlined">
        Warning
      </Button>
      <Button color="error" variant="outlined">
        Error
      </Button>
      <Button color="primary" variant="text">
        Primary
      </Button>
      <Button color="secondary" variant="text">
        Secondary
      </Button>
      <Button color="info" variant="text">
        Info
      </Button>
      <Button color="success" variant="text">
        Success
      </Button>
      <Button color="warning" variant="text">
        Warning
      </Button>
      <Button color="error" variant="text">
        Error
      </Button>
    </>
  );
};

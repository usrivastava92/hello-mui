import './App.scss';
import {
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import { getPaletteByMode } from './config/theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: getPaletteByMode(prefersDarkMode ? 'dark' : 'light')
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>
        <Button color={'primary'}>Hello World</Button>
      </Typography>
    </ThemeProvider>
  );
}

export default App;

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import './App.scss';
import { getThemeOptionsByMode } from './config/theme';
import TopMenuLayout from './layouts/TopMenuLayout';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme(getThemeOptionsByMode(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopMenuLayout />
    </ThemeProvider>
  );
}

export default App;

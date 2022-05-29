import './App.scss';
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import { getThemeOptionsByMode } from './config/theme';
import TopBar from './TopBar';

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
      <TopBar />
    </ThemeProvider>
  );
}

export default App;

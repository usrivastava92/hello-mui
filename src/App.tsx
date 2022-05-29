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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideMenuLayout from '@/layouts/SideMenuLayout';
import SimpleMenuLayout from '@/layouts/SimpleMenuLayout';
import PageNotFound from '@/pages/404';

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
      <BrowserRouter>{getRoutes()}</BrowserRouter>
    </ThemeProvider>
  );
}

function getRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route path="/" element={<TopMenuLayout />}></Route>
      <Route path="/top" element={<TopMenuLayout />}></Route>
      <Route path="/side" element={<SideMenuLayout />}></Route>
      <Route path="/simple" element={<SimpleMenuLayout />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;

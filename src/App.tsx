import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import React from 'react';
import './App.scss';
import { getThemeOptionsByMode } from './config/theme/theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TopMenuLayout } from '@/layouts/TopMenuLayout';
import { SideMenuLayout } from '@/layouts/SideMenuLayout/SideMenuLayout';
import { Login } from '@/pages/Login';
import { PageNotFound } from '@/pages/404';
import { SimpleMenuLayout } from '@/layouts/SimpleMenuLayout';
import { Buttons } from '@/pages/Buttons';
import { Tooltips } from '@/pages/Tooltip';

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

function getRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/top" />}></Route>
      <Route path="/top" element={<TopMenuLayout />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/side" element={<SideMenuLayout />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/simple" element={<SideMenuLayout mini />}>
        {getNestedRoutes()}
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

function getNestedRoutes(): JSX.Element {
  return (
    <>
      <Route path="buttons" element={<Buttons />}></Route>
      <Route path="tooltips" element={<Tooltips />}></Route>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.scss';
import SideMenuLayout from './layouts/SideMenuLayout';
import SimpleMenuLayout from './layouts/SimpleMenuLayout';
import TopMenuLayout from './layouts/TopMenuLayout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>{getRoutes()}</BrowserRouter>
  </React.StrictMode>
);

function getRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/top" element={<TopMenuLayout />}></Route>
      <Route path="/side" element={<SideMenuLayout />}></Route>
      <Route path="/simple" element={<SimpleMenuLayout />}></Route>
    </Routes>
  );
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './core/HomePage';
import Navbar from './core/components/Navbar';
import LoginRoutes from './auth/LoginRoutes';
import AuthContextProvider from './auth/contexts/AuthContextProvider';

import './App.scss';

function App(): React.ReactElement {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<LoginRoutes />} />
          <Route path="" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

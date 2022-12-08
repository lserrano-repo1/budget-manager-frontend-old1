import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './features/Dashboard/Dashboard';
import UserLoginForm from './features/Login/UserLoginForm';

import budgtManTheme from './resources/budgtManTheme';

function App() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={budgtManTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<UserLoginForm  />} />
                        <Route path="/nav" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;

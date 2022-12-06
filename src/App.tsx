import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './features/Dashboard/Dashboard';
//import Login from './features/Home/Login';
import UserLogin from './features/Login/UserLogin';
import budgtManTheme from './resources/budgtManTheme';

function App() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={budgtManTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<UserLogin />} />
                        <Route path="/nav" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;

{
    /*
   <div className="App">
      <header className="App-header">
      <p>iniio</p>
      </header>
      <h1>una prueba</h1>
    </div>
  */
}

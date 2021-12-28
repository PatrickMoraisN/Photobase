import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleAuthInfoProvider } from './hooks/useGoogleAuthInfo';
import { SwitchThemeProvider } from './hooks/useSwitchTheme';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthInfoProvider>
      <SwitchThemeProvider>
        <App />
      </SwitchThemeProvider>
    </GoogleAuthInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

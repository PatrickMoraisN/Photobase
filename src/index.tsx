import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SwitchThemeProvider } from './hooks/useSwitchTheme';

ReactDOM.render(
  <React.StrictMode>
    <SwitchThemeProvider>
      <App />
    </SwitchThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

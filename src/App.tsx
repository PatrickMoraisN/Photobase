import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RoutesComponent } from './routes';
import { GlobalStyle } from './styles/global';
import { useSwitchTheme } from './hooks/useSwitchTheme';

function App() {
  const { theme } = useSwitchTheme();
  return (
    <ThemeProvider theme={theme}>
      <RoutesComponent />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

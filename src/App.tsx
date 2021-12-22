import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import { RoutesComponent } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <RoutesComponent />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

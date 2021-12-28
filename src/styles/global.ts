import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: Poppins;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: Poppins;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
  }

  body {
    background: ${(props: any) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    min-height: 100vh;
    width: 100%;
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }
`;

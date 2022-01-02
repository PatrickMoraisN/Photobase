import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
    color: ${(props) => props.theme.colors.text};
    min-height: 100vh;
    width: 100%;
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }

  .react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  width: 100%;
  max-width: 60rem;
  background: #444;
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: 0.3s;
  &:hover {
    filter: brightness(0.3);
  }
}
`;

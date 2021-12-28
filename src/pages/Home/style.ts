import styled from 'styled-components';

export const HomeSection = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    color: ${(props) => props.theme.colors.primary};
  }
`;

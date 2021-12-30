import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 60px;
  background: ${(props) => props.theme.colors.background_header};
`;

export const HeadingLogo = styled.h1`
  font-size: 38px;
  color: ${(props) => props.theme.colors.text_header};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  img {
    height: 60px;
    border-radius: 50%;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text_header};
  }

  button {
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 12px;
    background: red;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text_header};
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

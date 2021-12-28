import styled from 'styled-components';

interface IContainerProps {
  params: {
    pathname: string;
  };
}

export const container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => {
      if (props.params.pathname !== '/photo') {
        return props.theme.colors.text;
      }
      return '#fff';
    }};
  }
`;

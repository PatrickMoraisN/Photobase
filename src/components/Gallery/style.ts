import styled from 'styled-components';

export const PhotoContaier = styled.div`
  width: 12rem;
  height: 12rem;
  background: ${(props) => props.theme.colors.background_upload};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 15px;
    object-fit: cover;
  }

  button {
    background: none;
    border: none;
    margin-top: 10px;

    svg {
      color: ${(props) => props.theme.colors.text};
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const GalleryContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
`;

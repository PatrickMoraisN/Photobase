import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-bottom: 15px;
  background: ${(props) => props.theme.colors.background_upload};
  width: 100%;
  padding: 13px 35px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  input[type='file'] {
    display: none;
  }

  button,
  label {
    background: #1d3354;
    border: none;
    border-radius: 6px;
    color: white;
    padding: 8px 15px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

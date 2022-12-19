import styled from 'styled-components';

export const ShowPasswordContainer = styled.label`
  display: flex;
  align-items: center;
  max-width: 120px;
  cursor: pointer;

  input {
    margin-right: .5rem;
  }

  span {
    opacity: .6;
    font-size: .875rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.lightColor};
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 190px;
    min-width: 190px;
    padding: 1rem 0;
    font-size: .875rem;
    transition: .4s;

    &:hover {
      background: ${({ theme }) => theme.colors.greenColorHover};
    }
  }
`;

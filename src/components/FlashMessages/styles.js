import styled from 'styled-components';

export const FlashMessagesContainer = styled.div`
  width: 100%;
  padding: .5rem;
  border-radius: 5px;

  &#success {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-weight: 700;
  }

  &#error {
    background: tomato;
    color: ${({ theme }) => theme.colors.lightColor};
    font-weight: 700;
  }
`;

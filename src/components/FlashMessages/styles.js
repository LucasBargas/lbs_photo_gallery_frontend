import styled from 'styled-components';

export const FlashMessagesContainer = styled.div`
  width: 100%;
  padding: .75rem;
  border-radius: 3px;
  font-size: .875rem;
  font-weight: 700;

  &#success {
    background: ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.lightColor};
  }

  &#error {
    background: ${({ theme }) => theme.colors.tomatoColor};
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;

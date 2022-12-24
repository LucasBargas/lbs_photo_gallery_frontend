import styled from 'styled-components';

export const FlashMessagesContainer = styled.section`
  width: 100%;
  max-width: 520px;
  padding: 1.25rem;
  margin: 0 auto 2rem auto;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 600px) {
    width: 90%;
  }

  &#success {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-weight: bold;
  }

  &#error {
    background: ${({ theme }) => theme.colors.tomatoColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-weight: bold;
  }
`;

import styled from 'styled-components';

export const LoginPageContainer = styled.section`
  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const LoginPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

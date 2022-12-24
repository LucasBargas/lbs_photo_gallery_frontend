import styled from 'styled-components';

export const RegisterPageContainer = styled.section`
  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const RegisterPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

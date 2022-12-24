import styled from 'styled-components';

export const EditUserPageFormContainer = styled.section`
  padding: 3rem 4rem;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const EditUserPageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditUserPageFormPhoto = styled.div``;

import styled from 'styled-components';

export const FormAuthContainer = styled.div`
  h2 {
    text-align: center;
  }
`;

export const FormAuthWrapper = styled.form`
  display: grid;
  padding-top: 1.5rem;
  gap: 1rem;
`;

export const FormAuthRedirect = styled.div`
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: .25rem;

  a {
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

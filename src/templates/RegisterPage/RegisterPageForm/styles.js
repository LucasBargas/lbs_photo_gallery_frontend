import styled from 'styled-components';

export const RegisterPageFormContainer = styled.div`
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

export const RegisterNameInput = styled.div`
  width: 100%;
  border: 1px solid #ccc;

  label {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    opacity: .6;
    height: 2.5rem;
    padding: 0 1.25rem;
    font-size: .75rem;
  }
`;

export const RegisterNameInputWrapper = styled.div`
  display: flex;

  * {
    width: 50%;
    border: none;
  }
`;

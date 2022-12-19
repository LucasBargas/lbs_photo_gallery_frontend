import styled from 'styled-components';

export const RegisterPageContainer = styled.section`
  padding: 3rem 0;
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
    flex: 1;
    border: none;
  }
`;

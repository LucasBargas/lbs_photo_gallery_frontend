import styled from 'styled-components';
import { ButtonContainer } from '../../../components/Form/Button/styles';
import { ShowPasswordContainer } from '../../../components/Form/ShowPassword/styles';

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

export const EditUserPageFormArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  ${ButtonContainer} {
    justify-content: flex-start;

    button {
      max-width: 130px;
      min-width: 130px;
    }
  }

  ${ShowPasswordContainer} {
    span {
      opacity: 1 !important;
    }
  }
`;

export const EditUserPageFormField = styled.div`
  display: flex;

  label {
    font-weight: 700;
    height: 2.5rem;
    width: 25%;
  }

  input {
    padding: 0 .75rem;
    height: 2.5rem;
  }

  textarea {
    padding: .75rem;
    resize: none;
  }

  input, textarea {
    width: 75%;
    border: 1px solid #ccc;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.greenColor};
    }
  }
`;

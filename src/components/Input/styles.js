import styled from 'styled-components';

export const InputContainer = styled.div`
  border: 1px solid #ccc;

  label, input {
    width: 100%;
    border: 1px solid #ccc;
    height: 2.5rem;
    padding: 0 1.25rem;
    font-size: .75rem;
  }

  input {
    display: block;
  }

  label {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    opacity: .6;
  }
`;

import styled from 'styled-components';

export const EditUserPageFormPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  figure {
    cursor: pointer;

    img {
      border-radius: 100%;
      object-fit: cover;
    }
  }

  input[type='file'] {
    display: none;
  }

  h1 {
    font-weight: 400;
    font-size: 1.325rem;
    margin-bottom: .75rem;
    line-height: 0;
  }

  button {
    background: none;
    border: none;
    font-weight: 700;
    font-size: .875rem;
    text-transform: unset;
    color: ${({ theme }) => theme.colors.greenColor};
    transition: .4s;

    &:hover {
      color: ${({ theme }) => theme.colors.greenColorHover};
    }
  }
`;

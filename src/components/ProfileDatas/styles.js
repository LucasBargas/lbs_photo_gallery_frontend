import styled from 'styled-components';

export const ProfileDatasContainer = styled.div`
  display: flex;
  gap: 4rem;

  figure {
    img {
      object-fit: cover;
      border-radius: 100%;
    }
  }
`;

export const ProfileDatasInfos = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    &:not(:first-of-type) {
      margin-top: .75rem;
    }

    &:last-of-type {
      flex-direction: column;
      align-items: flex-start;
      gap: .25rem;
    }

    li {
      display: flex;
      gap: .25rem;

      h1 {
        font-weight: 400;
        font-size: 1.75rem;
      }

      svg {
        font-size: 1.5rem;
      }

      a {
        background: ${({ theme }) => theme.colors.lightColor};
        color: ${({ theme }) => theme.colors.greenColor};
        border: 2px solid ${({ theme }) => theme.colors.greenColor};
        text-transform: unset;
        font-weight: 700;
        padding: .25rem;
        border-radius: 4px;
        transition: .4s;

        &:hover {
          background: ${({ theme }) => theme.colors.greenColor};
          color: ${({ theme }) => theme.colors.lightColor};

          svg {
            color: ${({ theme }) => theme.colors.lightColor};
          }
        }

        svg {
          color: ${({ theme }) => theme.colors.greenColor};
          transition: .4s;
        }
      }
    }
  }
`;

export const ProfileDatasAddPhotoBtn = styled.button`
  background: ${({ theme }) => theme.colors.greenColor};
  border: 2px solid ${({ theme }) => theme.colors.greenColor};
  text-transform: unset;
  font-weight: 700;
  padding: .25rem;
  border-radius: 4px;
  transition: .4s;

  &:hover {
    background: ${({ theme }) => theme.colors.greenColorHover};
    border-color: ${({ theme }) => theme.colors.greenColorHover};
  }

  svg {
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;

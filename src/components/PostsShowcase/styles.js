import styled from 'styled-components';

export const NoPostsContainer = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;


  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .625rem;

    button {
      border: 2px solid ${({ theme }) => theme.colors.primaryColor};
      background: transparent;
      border-radius: 100%;
      padding: .75rem;
    }

    svg {
      font-size: 4rem;
    }

    span {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.greenColor};
      font-weight: 700;
      transition: .4s;

      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.greenColorHover};
      }
    }
  }
`;

export const PostsShowcaseContainer = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const PostsShowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  figure {
    img {
      width: 100%;
      height: 300px;
      border-radius: 4px;
      object-fit: cover;
    }
  }
`;

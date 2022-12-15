import styled from 'styled-components';

export const HeaderMediasContainer = styled.nav`
  display: none;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;
    gap: .125rem;

    a {
      font-size: 1.325rem;
      padding: .625rem 0 .625rem .625rem;
    }
  }
`;

import styled from 'styled-components';

export const HeaderMediasContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  a {
    font-size: 1.125rem;
    transition: .4s;
    padding: .325rem .325rem .325rem 0;

    &:hover {
      color: ${({ theme }) => theme.colors.greenColor};
    }
}
`;

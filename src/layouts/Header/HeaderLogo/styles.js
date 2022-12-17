import styled from 'styled-components';

export const HeaderLogoContainer = styled.nav`
  @media (max-width: 1024px) {
    padding-top: 1.5rem;
  }

  h1 {
    font-size: 1.325rem;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2.25rem;
    }

    @media (max-width: 384px) {
      font-size: 2rem;
    }

    @media (max-width: 320px) {
      font-size: 1.75rem;
    }
  }
`;

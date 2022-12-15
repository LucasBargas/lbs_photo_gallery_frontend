import styled from 'styled-components';

export const HeaderNavContainer = styled.nav`
  @media (max-width: 1024px) {
    padding-top: 1rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: 276px) {
      flex-direction: column;
    }

    a {
      opacity: .7;
      font-weight: 500;
      text-transform: uppercase;
      font-size: .875rem;

      @media (max-width: 1024px) {
        font-size: 1rem;
      }

      &.active {
        position: relative;
        opacity: 1;

        &::after {
          content: '';
          height: 6px;
          width: calc(100% + 4px);
          background: #006400;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          bottom: 2px;
          border-radius: 6px;
          opacity: .6;
        }
      }
    }
  }
`;

import styled, { css } from 'styled-components';

export const HeaderNavContainer = styled.nav`
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primaryColor};
    width: 50%;
    height: 100vh;
    z-index: 3000;
    transform: translate3d(100%, 0, 0);
    transition: .5s;

    ${({ headerNavMobile }) =>
      headerNavMobile &&
      css`
      transform: translate3d(0, 0, 0);
      transition: .5s;
    `}

      @media (max-width: 820px) {
        width: 55%;
      }

      @media (max-width: 700px) {
        width: 65%;
      }

      @media (max-width: 414px) {
        width: 100%;
      }
  }
`;

export const HeaderNavWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: 992px) {
      display: block;
      padding: 0 2rem;
    }

    a {
      opacity: .7;
      font-weight: 500;
      text-transform: uppercase;
      font-size: .875rem;

      @media (max-width: 1024px) {
        font-size: 1rem;
      }

      @media (max-width: 992px) {
        opacity: 1;
        color: ${({ theme }) => theme.colors.lightColor};
        padding: 1rem 0;
      }

      &.active {
        position: relative;
        opacity: 1;
        z-index: 1;

        &::after {
          content: '';
          height: 6px;
          width: calc(100% + .625rem);
          background: #006400;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          bottom: 2px;
          border-radius: 6px;
          opacity: .6;
          z-index: 2;

          @media (max-width: 992px) {
            bottom: 5px;
            left: 0px;
            background: ${({ theme }) => theme.colors.lightColor};
            transform: translateX(0);
            opacity: 1;
            height: 1px;
          }
        }
      }
    }
  }
`;

export const HeaderMobileButtonClose = styled.div`
  display: none;
  padding: .25rem 1rem;

  @media (max-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }

  button {
    border: none;
    background: transparent;
    padding: .625rem 0 .625rem .625rem;
    font-size: 2rem;

    svg {
      color: ${({ theme }) => theme.colors.lightColor};
    }
  }
`;

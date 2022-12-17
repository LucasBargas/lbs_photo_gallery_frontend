import styled, { keyframes } from 'styled-components';

const downUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

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

    a, button {
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

export const HeaderNavButtonProfile = styled.li`
  position: relative;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    gap: .5rem;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const HeaderNavSubmenu = styled.div`
  position: absolute;
  top: 2.625rem;
  right: 0;
  width: calc(100% + 5rem);
  z-index: 1000;

  @media(max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(35, 134, 54, .7);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }

  ul {
    display: block;
    border-radius: 4px;
    box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.greenColor};
    background: ${({ theme }) => theme.colors.lightColor};
    width: 100%;
    padding: .5rem;
    opacity: 1;
    visibility: visible;
    animation: ${downUp} .2s forwards;

    @media(max-width: 1024px) {
      width: 50%;
    }

    @media(max-width: 600px) {
      padding: .5rem .75rem;
      width: 70%;
    }

    @media(max-width: 480px) {
      width: 85%;
    }

    li {
      &:not(:first-of-type) {
        margin-top: .325rem;
      }

      &:first-of-type {
        display: none;
        justify-content: flex-end;

        @media(max-width: 1024px) {
          display: flex;
        }

        svg {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.greenColor};
          cursor: pointer;
        }
      }

      &:last-of-type {
        color: red;
        font-size: .875rem;
        border-top: 1px solid ${({ theme }) => theme.colors.greenColor};
        padding: .325rem 0;
        cursor: pointer;
      }

      a {
        display: block;
        text-transform: none;
        width: 100%;
        padding-bottom: .625rem;
        transition: .4s;

        &:hover {
          color: ${({ theme }) => theme.colors.greenColor};
        }

        &.active {
          color: ${({ theme }) => theme.colors.greenColor};
        }

        &::after {
          display: none;
        }
      }
    }
  }
`;

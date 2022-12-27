import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 4.25rem;

  ${({ shadow }) =>
    shadow &&
    css`
    box-shadow: rgb(0, 0, 0, .1) 0px 2px 15px;
  `}
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMobileButton = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }

  button {
    border: none;
    background: transparent;
    padding: .625rem 0 .625rem .625rem;
    font-size: 2rem;
  }
`;

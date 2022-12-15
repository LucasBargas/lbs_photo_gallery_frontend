import styled from 'styled-components';
import css from 'styled-jsx/css';

export const HeaderContainer = styled.header`
  padding: 1rem 0;

  ${({ shadow }) =>
    !shadow &&
    css`
    box-shadow: rgb(0, 0, 0, .1) 0px 2px 15px;
  `}
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

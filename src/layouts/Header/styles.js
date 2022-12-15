import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem 0;
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

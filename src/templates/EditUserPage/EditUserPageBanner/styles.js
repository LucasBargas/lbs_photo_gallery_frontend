import styled from 'styled-components';

export const EditUserPageBannerContainer = styled.div`
  background-image: url(${({ banner }) => banner});
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 850px;
  width: 100%;

  @media (max-width: 1366px) {
    min-height: 680px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

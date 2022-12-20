import styled from 'styled-components';

export const RegisterBannerContainer = styled.div`
  background-image: url(${({ banner }) => banner});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

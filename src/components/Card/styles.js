import styled from 'styled-components';

export const CardContentCovering = styled.div`
  background: rgba(0, 0, 0, .8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 7;
  opacity: 0;
  transition: .4s;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CardContentPhoto = styled.figure`
  cursor: pointer;
`;

export const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 6;

  * {
    color: ${({ theme }) => theme.colors.lightColor}
  }

  &:hover {
    ${CardContentPhoto} {
      img {
        transform: scale(1.2);
        transition: .4s;

        @media (max-width: 1024px) {
          transform: scale(1);
        }
      }
    }

    ${CardContentCovering} {
      opacity: 1;
      transition: .4s;
    }
  }

  ${CardContentPhoto} {
    img {
      transform: scale(1);
      transition: .4s;
    }
  }
`;

export const CardContentCoveringArea = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem;
`;

export const CardActions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
`;

export const CardButton = styled.button`
  width: 100%;
  max-width: 150px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.lightColor};
  border-radius: 4px;
  padding: .625rem .5rem;

  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const CardPostDetails = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    li {
      font-size: .75rem;
    }
  }

  figure {
    padding-bottom: .5rem;
    display: flex;
    align-items: center;

    legend {
      margin-left: .5rem;

      a {
        font-size: .875rem;
      }
    }

    img {
      height: 30px !important;
      width: 30px !important;
      object-fit: cover;
      border-radius: 100% !important;
    }
  }
`;

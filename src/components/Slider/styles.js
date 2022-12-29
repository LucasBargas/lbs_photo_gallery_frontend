import styled, { keyframes } from 'styled-components';

const sliderAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .9);
  padding: 1rem;
  animation: ${sliderAnimation} .3s forwards;

  * {
    color: ${({ theme }) => theme.colors.lightColor}
  }
`;

export const SliderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;

  button {
    background: transparent;
    border: none;
    padding: .25rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const SliderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
`;

export const SliderSingleContent = styled.div`
  position: absolute;
  opacity: 0;
  transition: .4s;
  border-radius: 4px;
  overflow: hidden;

  &:nth-of-type(${({ sliderActive }) => sliderActive}) {
    z-index: 7;
    opacity: 1;
    transition: .4s;
  }

  > figure {
    img {
      max-height: 400px;
      width: 100%;
      height: 100%;
    }
  }
`;

export const SliderSingleContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.lightColor};
  padding: .75rem 1rem;

  * {
    color: ${({ theme }) => theme.colors.primaryColor}
  }

  figure {
    a {
      display: flex;
      align-items: center;
      font-weight: 700;
      gap: .5rem;

      img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }

  ul {
    padding-top: .5rem;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    li {
      font-size: .75rem;
      font-weight: 700;
    }
  }
`;

export const SliderSingleContentActions = styled.div`
  button {
    border: none;
    background: tomato;
    color: ${({ theme }) => theme.colors.lightColor};
    text-transform: unset;
    padding: .5rem;
    border-radius: 4px;
    transition: .4s;

    &:hover {
      background: #ff2c06;
    }
  }
`;

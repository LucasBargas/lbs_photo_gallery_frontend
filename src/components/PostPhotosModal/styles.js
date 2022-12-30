import styled, { css, keyframes } from 'styled-components';
import { FlashMessagesContainer } from '../FlashMessages/styles';

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PostPhotosModalContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .9);
  height: 100vh;
  width: 100%;
  z-index: 5000;
`;

export const PostPhotosModalCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .875rem;

  button {
    background: transparent;
    border: none;
    height: 2rem;
    width: 2rem;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.lightColor};
    }
  }
`;

export const PostPhotosModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 1rem;
`;

export const PostPhotosModalArea = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  border-radius: 8px;
  width: 100%;
  max-width: 460px;
  position: relative;
  top: -2.875rem;
  animation: ${modalAnimation} .4s forwards;
`;

export const PostPhotosModalHeader = styled.div`
  text-align: center;
  padding: .75rem;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 1rem;
  }
`;

export const PostPhotosModalCallToPost = styled.div`
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ previewPhoto }) =>
    previewPhoto &&
    css`
      padding: 1.5rem 1rem;
    `}

  svg {
    background: transparent;
    border: none;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  h2 {
    font-weight: 400;
    margin: .5rem 0;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    margin-bottom: 1rem;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 300px;
  }

  button {
    background: ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.lightColor};
    border: none;
    text-transform: unset;
    font-size: .9375rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    width: 100%;
    max-width: 227px;
    transition: .4s;

    &:hover {
      background: ${({ theme }) => theme.colors.greenColorHover};
    }
  }

  input[type='file'] {
    display: none;
  }
`;

export const PostPhotosModalForm = styled.div`
  padding-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: .5rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: .75rem;
      padding-bottom: 1rem;

      label {
        display: block;
        cursor: pointer;
        font-size: .9325rem;
        padding: .25rem 0;

        @media (max-width: 414px) {
          padding: .5rem 0;
        }

        input {
          cursor: pointer;
          margin-right: .325rem;
        }
      }
    }

    ${FlashMessagesContainer} {
      margin-bottom: .75rem;
    }

    button {
      background: ${({ theme }) => theme.colors.lightColor};
      color: ${({ theme }) => theme.colors.greenColor};
      border: 2px solid ${({ theme }) => theme.colors.greenColor};
      cursor: ${({ loading }) => (loading ? 'wait' : 'pointer')};
      max-width: 130px;
      padding: .5rem 1rem;
      margin: 0 auto;

      &:hover {
        color: ${({ theme }) => theme.colors.lightColor};
        border-color: ${({ theme }) => theme.colors.greenColor};
        background: ${({ theme }) => theme.colors.greenColor};
      }
    }
  }
`;

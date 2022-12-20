import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 480px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Helvetica;

    ul, li {
      list-style: none;
    }

    input, textarea {
      outline: none;
      font-family: Helvetica;
      font-size: .875rem;
    }

    button {
      outline: none;
      cursor: pointer;
      display: inline-block;
      font-family: Helvetica;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    span, svg, a {
      display: block;
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    p {
      line-height: 1.5rem;
    }
  }
`;

export default Globals;

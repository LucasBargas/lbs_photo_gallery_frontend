import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }

  html {
    font-size: 16px;

    @media (max-width: 390px) {
      font-size: 15px;
    }

    @media (max-width: 320px) {
      font-size: 14px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.primaryColor};

    ul, li {
      list-style: none;
    }

    input, textarea {
      outline: none;
      font-size: .875rem;
    }

    button {
      outline: none;
      cursor: pointer;
      display: inline-block;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    img {
      display: block;
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

    h1 {
      line-height: 2.5rem;
    }

    p {
      line-height: 1.5rem;
    }
  }
`;

export default Globals;

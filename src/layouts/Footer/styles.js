import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 2.75rem 0;
  text-align: center;
  background: #e9e9e9;
  font-size: .875rem;

  a {
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greenColor};

    &:last-of-type {
      margin-top: .25rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

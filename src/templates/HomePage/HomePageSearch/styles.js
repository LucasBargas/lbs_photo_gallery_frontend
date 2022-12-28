import styled from 'styled-components';

export const HomePageSearchContainer = styled.div`
  padding-top: 1.5rem;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.75rem;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const HomePageSearchArea = styled.form`
  padding-top: 1rem;
  max-width: 600px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: .5rem .75rem;
  }
`;

export const HomePageSearchFilter = styled.form`
  padding: 1.5rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;

  ul {
    display: flex;
    justify-content: center;
    gap: .625rem;

    label, input {
      cursor: pointer;
      font-size: .9375rem;
    }

    input {
      margin-right: .25rem;
    }
  }
`;

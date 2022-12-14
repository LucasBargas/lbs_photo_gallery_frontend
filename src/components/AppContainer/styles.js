import styled from 'styled-components';

export const AppContainerArea = styled.div`
  width: 100%;
  max-width: ${({ mw }) => (mw ? mw : '95%')};
  margin: 0 auto;
`;

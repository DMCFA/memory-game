import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 5rem;
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const StyledNewGameButton = styled.button`
  cursor: pointer;
  margin: 0 auto;
  padding: 5px;
`;

import styled from 'styled-components';

export const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  font-size: 2.8rem;
  padding-block: 2.2rem;
  color: #7882a4;
  font-variant: small-caps;
  font-weight: 600;
`;

export const StyledH3 = styled.h3`
  font-size: 2.3rem;
  padding-block-end: 0.5rem;
  color: #7882a4;
  font-variant: small-caps;

  & :last-of-type {
    padding-top: 1rem;
  }
`;

export const StyledP = styled.p`
  padding-block: 0.5rem;
  text-align: center;
  opacity: 0.9;
  letter-spacing: 0.05rem;
  line-height: 2rem;
`;

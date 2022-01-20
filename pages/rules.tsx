import React, { ReactElement } from 'react';
import {
  StyledRules,
  StyledH2,
  StyledH3,
  StyledP,
} from '../styles/Rules.styled';

const Rules: React.FC = (): ReactElement => {
  return (
    <StyledRules>
      <StyledH2>Rules</StyledH2>
      <StyledH3>Game Objective</StyledH3>
      <StyledP>
        The object of the game is to collect the most matching pairs.
      </StyledP>
    </StyledRules>
  );
};

export default Rules;

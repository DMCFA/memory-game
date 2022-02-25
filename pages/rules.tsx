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
      <StyledH3>game objective</StyledH3>
      <StyledP>
        The game objective is to collect all the matching pairs.<br></br>
        On the game board, there are always two identical images.<br></br>
        Start the game by flipping a card. Then try to find another card that
        has the same image as the first. <br></br>If you can't find a pair, the
        flipped cards will be flipped back with the face down.<br></br> Try to
        remember these images as it becomes easier to find pairs the longer you
        play.<br></br>
        When you find a pair they are removed from the board and when you find
        all the pairs you have completed the game.
      </StyledP>
      <StyledH3>score</StyledH3>
      <StyledP>
        Your number of moves is recorded on the screen, the less moves you make
        to finish the game the better you score.
      </StyledP>
    </StyledRules>
  );
};

export default Rules;

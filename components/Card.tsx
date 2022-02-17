import React, { useState } from 'react';
import { Image } from '../pages';
import {
  StyledBackCard,
  StyledCard,
  StyledFrontCard,
} from '../styles/Card.styled';

interface Props {
  card: Image;
  handleChoice: (card: Image) => void;
}

const Card: React.FC<Props> = ({ card, handleChoice }): JSX.Element => {
  const handleClick = () => {
    if (card.clicked) handleChoice(card);
  };
  return (
    <StyledCard onClick={handleClick}>
      <StyledFrontCard
        flipped={card.flipped}
        src={card.frontCard}
        alt='front card image'
      />
      <StyledBackCard
        flipped={card.flipped}
        src={card.backCard}
        alt='cover image'
      />
    </StyledCard>
  );
};

export default Card;

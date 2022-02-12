import React, { useState } from 'react';
import { Images } from '../pages/index';
import {
  StyledCard,
  StyledContainer,
  StyledNewGameButton,
} from '../styles/Card.styled';

const Card: React.FC<Images> = (props): JSX.Element => {
  return (
    <>
      <StyledContainer>
        <StyledNewGameButton>new game</StyledNewGameButton>
        <StyledCard key={props.id}>
          <img src={props.src} alt='front image' />
        </StyledCard>
        ;
      </StyledContainer>
    </>
  );
};

export default Card;

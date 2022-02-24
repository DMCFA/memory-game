import React, { useEffect, ChangeEvent } from 'react';
import Router from 'next/router';
import confetti from 'canvas-confetti';
import {
  StyledContainer,
  StyledTitle,
  StyledWonButton,
} from './../styles/Won.styled';

interface Opts {
  spread: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

const count = 250;
const defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio: number, opts: Opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

const Won: React.FC = (): JSX.Element => {
  useEffect(() => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  const handleClick = () => {
    Router.push('/');
  };
  return (
    <StyledContainer>
      <StyledTitle>you won</StyledTitle>
      <StyledWonButton onClick={handleClick}>play again?</StyledWonButton>
    </StyledContainer>
  );
};

export default Won;

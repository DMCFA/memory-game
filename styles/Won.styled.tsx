import styled from 'styled-components';
import { StyledNewGameButton } from './Card.styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  @media screen and (max-width: 500px) {
    margin-top: 5rem;
    padding: 0;
  }
`;

export const StyledTitle = styled.h1`
  color: #325288;
  font-size: 6rem;
  font-variant: small-caps;
  animation: title-entrance 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes title-entrance {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      opacity: 1;
    }
  }
`;

export const StyledWonButton = styled(StyledNewGameButton)`
  margin-top: 4rem;
  font-size: 1.5rem;
  animation: heartbeat 1.5s ease-in-out infinite both;

  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import {
  StyledContainer,
  StyledNewGameButton,
  StyledCard,
} from '../styles/Card.styled';

//types
export interface Images {
  id: number;
  frontCard: string;
  backCard: string;
  flipped: boolean;
  clicked: boolean;
}

export interface ImageCard {
  id: number;
  src: string;
}

const images: ImageCard[] = [
  { id: 0, src: '../public/images/alpine.png' },
  { id: 1, src: '../public/images/apple.png' },
  { id: 2, src: '../public/images/credit-card.png' },
  { id: 3, src: '../public/images/hammer.png' },
  { id: 4, src: '../public/images/ice-cream-cup.png' },
  { id: 5, src: '../public/images/soccer-ball.png' },
  { id: 6, src: '../public/images/startup.png' },
  { id: 7, src: '../public/images/vynil.png' },
  { id: 8, src: '../public/images/walrus.png' },
  { id: 9, src: '../public/images/wristwatch.png' },
];

//helper function to shuffle cards
const swapCards = (arr: Images[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//shuffle cards function --> duplicates the array, shuffles and sets the new array and turns the move count to zero
const shuffleCards = (): Images[] => {
  const newArr: any[] = [...images, ...images];
  for (let i = newArr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swapCards(newArr, randomIndex, currentIndex);
  }
  return newArr.map((card) => ({
    id: card.id,
    frontCard: card.src,
    backCard: 'images/cover.png',
    flipped: false,
    clicked: false,
  }));
};

const Home: NextPage = (props) => {
  const [cards, setCards] = useState<Images[]>(shuffleCards());
  const [moves, setMoves] = useState<Number>(0);

  return (
    <StyledContainer>
      <h1>Memory Game</h1>
      <StyledNewGameButton onClick={() => shuffleCards()}>
        New Game
      </StyledNewGameButton>
      <StyledCard>
        {cards.map((card) => (
          <Card />
        ))}
      </StyledCard>
    </StyledContainer>
  );
};

export default Home;

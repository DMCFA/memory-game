import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import {
  StyledContainer,
  StyledNewGameButton,
  StyledGrid,
} from '../styles/Card.styled';

//game images
const imagesArr: string[] = [
  'images/alpine.png',
  'images/apple.png',
  'images/credit-card.png',
  'images/hammer.png',
  'images/ice-cream-cup.png',
  'images/soccer-ball.png',
  'images/startup.png',
  'images/vynil.png',
  'images/walrus.png',
  'images/wristwatch.png',
];

//interface
export interface Image {
  id: string;
  frontCard: string;
  backCard: string;
  flipped: boolean;
  clicked: boolean;
}

//helper function to shuffle cards
const swapCards = (arr: Image[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//shuffle cards function --> duplicates the array, shuffles and sets the new array and turns the move count to zero
const shuffleCards = (): Image[] => {
  const newArr: any[] = [...imagesArr, ...imagesArr];
  for (let i = newArr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swapCards(newArr, randomIndex, currentIndex);
  }
  return newArr.map((card, idx) => ({
    id: `card${idx}`,
    frontCard: card,
    backCard: 'images/cover.png',
    flipped: false,
    clicked: false,
  }));
};

const Home: NextPage = (props) => {
  const [cards, setCards] = useState<Image[]>(shuffleCards());
  const [moves, setMoves] = useState<Number>(0);

  //game logic
  const handleChoice = (clickedCard: Image): void => {
    setCards((item) =>
      item.map((card) =>
        card.id === clickedCard.id
          ? { ...card, flipped: true, clicked: false }
          : card
      )
    );
  };

  return (
    <StyledContainer>
      <h1>Memory Game</h1>
      <StyledNewGameButton onClick={() => shuffleCards()}>
        New Game
      </StyledNewGameButton>
      <StyledGrid>
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Home;

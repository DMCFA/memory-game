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
  '/images/alpine.png',
  '/images/apple.png',
  '/images/credit-card.png',
  '/images/hammer.png',
  '/images/ice-cream-cup.png',
  '/images/soccer-ball.png',
  '/images/startup.png',
  '/images/vynil.png',
  '/images/walrus.png',
  '/images/wristwatch.png',
];

//interface
export interface Image {
  id: string;
  frontCard: string;
  backCard: string;
  flipped: boolean;
  clicked: boolean;
  matchCard: string;
}

//board
const newBoard = (): Image[] =>
  [...imagesArr, ...imagesArr].map((card, idx) => ({
    id: `card${idx}`,
    frontCard: card,
    backCard: 'images/cover.png',
    flipped: false,
    clicked: false,
    matchCard:
      idx < imagesArr.length
        ? `card${idx + imagesArr.length}`
        : `card${idx - imagesArr.length}`,
  }));

//helper function to shuffle cards
const swapCards = (arr: Image[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const Home: NextPage = (props) => {
  const [cards, setCards] = useState<Image[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [currentCard, setCurrentCard] = useState<undefined | Image>(undefined);
  const [gameWon, setGameWon] = useState(false);

  //shuffle cards function
  const shuffleCards = (newArr: any[]): void => {
    setMoves(0);
    setMatchedPairs(0);
    const shuffledArr = newArr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
    setCards(shuffledArr);
  };

  //new game
  useEffect(() => {
    setCards(newBoard());
  }, []);

  //game logic
  const handleChoice = (clickedCard: Image): void => {
    setCards((item) =>
      item.map((card) =>
        card.id === clickedCard.id
          ? { ...card, flipped: true, clicked: false }
          : card
      )
    );

    if (!currentCard) {
      setMoves((item) => item + 1);
      setCurrentCard({ ...clickedCard });
      return;
    }

    if (currentCard.matchCard === clickedCard.id) {
      setMoves((item) => item + 1);
      setMatchedPairs((item) => item + 1);
      setCards((item) =>
        item.map((card) =>
          card.id === currentCard.id || card.id === clickedCard.id
            ? { ...card, clicked: true }
            : card
        )
      );
      setCurrentCard(undefined);
      return;
    }

    setTimeout(() => {
      setCards((item) =>
        item.map((card) =>
          card.id === currentCard.id || card.id === clickedCard.id
            ? { ...card, flipped: false, clicked: true }
            : card
        )
      );
    }, 1000);
    setCurrentCard(undefined);
  };

  //game won
  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [matchedPairs]);

  return (
    <StyledContainer>
      <StyledNewGameButton onClick={() => shuffleCards(newBoard())}>
        new game
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

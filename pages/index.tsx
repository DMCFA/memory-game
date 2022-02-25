import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import {
  StyledContainer,
  StyledNewGameButton,
  StyledGrid,
  StyledGameHeader,
  StyledResults,
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

  //shuffle cards function
  const shuffleCards = (newArr: any[]): any[] => {
    return newArr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  };

  //new game
  useEffect(() => {
    setMoves(0);
    setMatchedPairs(0);
    setCards(shuffleCards(newBoard()));
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
    if (matchedPairs > 0 && matchedPairs === cards.length / 2) {
      Router.push('/won');
    }
  }, [matchedPairs]);

  return (
    <StyledContainer>
      <StyledGameHeader>
        <StyledResults>moves ➡️ {moves}</StyledResults>
        <StyledNewGameButton onClick={() => Router.reload()}>
          new game
        </StyledNewGameButton>
        <StyledResults>matched pairs ➡️ {matchedPairs}</StyledResults>
      </StyledGameHeader>
      <StyledGrid>
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Home;

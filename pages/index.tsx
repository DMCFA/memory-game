import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

interface Images {
  id: number;
  src: string;
}

const images: Images[] = [
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

const Home: NextPage = (props) => {
  const [cards, setCards] = useState({});
  const [moves, setMoves] = useState(0);

  //helper function to shuffle cards
  const swapCards = (arr: Images[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  //shuffle cards function --> duplicates the array, shuffles and sets the new array and turns the move count to zero
  const shuffleCards = (arr: Images[]): void => {
    const newArr: Images[] = [...arr, ...arr];
    for (let i = newArr.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swapCards(newArr, randomIndex, currentIndex);
    }
    setCards(newArr);
    setMoves(0);
  };

  // useEffect(() => {
  //   shuffleCards(images);
  //   console.log(cards);
  // }, []);

  return (
    <div>
      <main>
        <Card />
      </main>
    </div>
  );
};

export default Home;

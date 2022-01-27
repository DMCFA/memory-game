import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home: NextPage = (props) => {
  const [images, setImages] = useState([]);
  const [moves, setMoves] = useState(0);

  const swapCards = (arr: string[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const shuffleCards = (arr: string[]): string[] => {
    for (let i = arr.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swapCards(arr, randomIndex, currentIndex);
    }
    return arr;
  };

  const getImages = useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?orientation=portrait&count=10&client_id=${process.env.KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
      <main>
        <Card images={images} />
      </main>
    </div>
  );
};

export default Home;

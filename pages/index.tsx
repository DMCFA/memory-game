import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Game from './game';

const Home: NextPage = (props) => {
  const [images, setImages] = useState([]);

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
        <Game images={images} />
      </main>
    </div>
  );
};

export default Home;

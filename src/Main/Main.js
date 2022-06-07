import React from 'react';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard';
import backgroundImg from '../background.png';

export default function Main({ zodiacs }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
    
      {zodiacs.map((zodiac, i) => <ZodiacCard {...zodiac} key={zodiac.name + i}/>
      )}
      
    </main>
  );
}
    
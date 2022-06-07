import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac-card'>
      <img src= {`/images/${name}.png`} />
      <p>{name}</p>
      <p>{dates}</p>
    </div>
  );
  
}
    

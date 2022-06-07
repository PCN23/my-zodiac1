import './App.css';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import Header from './Header/Header.js';
import { zodiac } from './data.js';
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <Header name= 'Pedro'/>
      <Main zodiacs={zodiac} />
      <Footer year= '2022' />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import classes from './App.module.css';
import {Button} from 'react-bootstrap';
import Game from './components/Game/Game';
import Wrapper from './components/Helpers/Wrapper';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const handleReturn = () => {
    console.log(isPlaying);
    setIsPlaying(false);
  }
  const playGameHandle = () => {
    setIsPlaying(true)
  }
  return (
    <Wrapper>
    {isPlaying && <Game handleReturn={handleReturn}/>}

    {!isPlaying &&
    <main className={`${classes.menu} container d-flex flex-column align-items-center justify-content-center vh-100`}>
        <h1 className={`${classes.title}`}>Black Jack</h1>
       <section className={`row ${classes["play-game"]}} py-3`}>
        <Button className={``} onClick={playGameHandle}>Play Game</Button>
       </section>
        <section className={`row ${classes.help} py-3`}>
          <Button>Help</Button>
        </section>
        <section className={`row ${classes.option} py-3`}>
          <Button>Option</Button>
        </section>
    </main>}
    </Wrapper>
  );
}

export default App;

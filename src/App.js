import React, {useState,useRef} from 'react';
import classes from './App.module.css';
// import './App.css'
import {Button} from 'react-bootstrap';
import Game from './components/Game/Game';
import Wrapper from './components/Helpers/Wrapper';
import Help from './components/Help/Help';
import ResultModal from './components/ResultModal/ResultModal';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [isResetBudget, setIsResetBudget] = useState(false);
  const handleReturn = () => {
    setIsPlaying(false);
    setIsHelp(false);
  }
  const playGameHandle = () => {
    setIsPlaying(true)
    setIsResetBudget(false)
  }

  const onClickHelpHandler = () => {
    setIsHelp(true)
  }
  const onClickResetBudget = () => {
    if (!isResetBudget){
      localStorage.setItem('budget', 100);
      setIsResetBudget(true);
    }
  }
  return (
    <Wrapper>
    {isPlaying && <Game handleReturn={handleReturn} menuStart={true}/>}
    {isHelp && <Help handleReturn={handleReturn}/>}
    {isResetBudget && <ResultModal resetBudget={true}/>}
    {(!isPlaying && !isHelp) &&
     <main className={`${classes.menu} container d-flex flex-column align-items-center justify-content-center vh-100`}> 
       <h1 className={`${classes.title}`}>Black Jack<img className={`${classes.logo}`}  src="https://cdn-icons-png.flaticon.com/512/1983/1983632.png" alt='logo black jack'/></h1>
       <section className={`row ${classes["play-game"]}} py-3`}>
        <Button className={``} onClick={playGameHandle}>Play Game</Button>
       </section>
        <section className={`row ${classes.help} py-3`}>
          <Button onClick={onClickHelpHandler}>How To Play</Button>
        </section>
        <section className={`row ${classes.option} py-3`}>
          <Button onClick={onClickResetBudget}>Reset Budget</Button>
        </section>
    </main>}
    </Wrapper>
  );
}

export default App;

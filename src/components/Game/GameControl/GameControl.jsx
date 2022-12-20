import React,{useState} from 'react'
import {Col,Row,Button } from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper'
import classes from './GameControl.module.css'
import styled from 'styled-components'
import ResultModal from '../../ResultModal/ResultModal'


const GameControl = ({gameOver, startGame,hit,stand, budget}) => {
  const [value, setValue] = useState(10);
  const [isValidBet, setIsValidBet] = useState(false);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (e.target.value > budget || e.target.value < 0) {
      setIsValidBet(false);
      return
    }
    console.log(isValidBet);
    setIsValidBet(true);
    
  }
  const onClickHandler = (e) => {
    if (isValidBet) 
      startGame(e);
    setValue(0);
    setIsValidBet(false)
  }
  if (gameOver) {
    return (
      <Col >
        <label htmlFor="bet" className={classes["bet-label"]}>Bet Amount</label>
        <input onChange={onChangeHandler} className={`${classes["bet-input"]}`} type='number'/>
        <button onClick={e => onClickHandler(e)} className={`${classes["custom-btn"]}`} data={value}>Start New Game</button>
      </Col>
    )
  }else{
    return (<Wrapper>
      <Col sm={6} className={`my-sm-1`}>
        <button onClick={hit} className={`${classes["custom-btn"]}`}>Hit</button>
      </Col>
      <Col sm={6} className={`mt-sm-1`}>
        <button onClick={stand} className={`${classes["custom-btn"]}`}>Stand</button>
      </Col>
    </Wrapper>)
  }
}

export default GameControl;
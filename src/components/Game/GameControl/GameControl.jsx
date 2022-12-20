import React from 'react'
import {Col,Row,Button } from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper'
import classes from './GameControl.module.css'
import styled from 'styled-components'



const GameControl = ({gameOver, startGame,hit,stand}) => {
  if (gameOver) {
    return (
      <Col>
        <Button onClick={startGame} className={`${classes["custom-btn"]}`}>Start New Game</Button>
      </Col>
    )
  }else{
    return (<Wrapper>
      <Col sm={6} className={`my-sm-1`}>
        <Button onClick={hit} className={`${classes["custom-btn"]}`}>Hit</Button>
      </Col>
      <Col sm={6} className={`mt-sm-1`}>
        <Button onClick={stand} className={`${classes["custom-btn"]}`}>Stand</Button>
      </Col>
    </Wrapper>)
  }
}

export default GameControl;
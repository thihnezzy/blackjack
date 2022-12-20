import React, {useState,useEffect} from "react";
import { Button, Container, Figure, Row, Col, ButtonGroup} from "react-bootstrap";
import classes from "./Game.module.css";
import Card from "./Card/Card";
import GameControl from "./GameControl/GameControl";
import ResultModal from "../ResultModal/ResultModal"
import Cards from './Card/CardData'
import _ from 'lodash'
import Wrapper from "../Helpers/Wrapper";

const style = {
    backgroundColor: "#1A0033",
}

const getCardValue = card => {
    if (typeof card.rank === 'number') {
        
      return parseInt(card.rank);
    } else if (card.rank === 'A') {
      return 11;
    } else {
      return 10;
    }
  };
  const getHandValue = hand => {
    let value = 0;
    let aces = 0;
    for (const card of hand) {
      value += getCardValue(card);
      if (card.rank === 'A') {
        aces += 1;
      }
    }
    while (value > 21 && aces > 0) {
      value -= 10;
      aces -= 1;
    }
    
    return [value,aces];
  };

const Game = ({handleReturn}) =>{
    const [dealerHand, setDealerHand] = useState([]); 
    const [playerHand, setPlayerHand] = useState([]);
    const [deck, setDeck] = useState(_.shuffle(Cards));
    const [cardIndex, setCardIndex] = useState(51);
    const [gameOver, setGameOver] = useState(true);
    const [budget, setBudget] = useState(localStorage.getItem('budget') !== null ? parseInt(localStorage.getItem('budget')) : 100);
    const [message, setMessage] = useState('');
    const [bet, setBet] = useState(10);
    const [isInitial, setIsInitial] = useState(false);
    useEffect(() => {
      setIsInitial(true);
    },[])


    const startGame = (e) => {
        setIsInitial(false);
        const flippedCards = document.querySelectorAll('.is-flipped');
        flippedCards.forEach((card,index) => {if (index !== 1) {card.classList.remove('is-flipped')}});
        const newDeck = _.shuffle(Cards); 
        let i;
        let dealer = [];
        let player = [];
        let id = 51;
        for (i = 0; i < 2; i++){
            dealer.push(newDeck[id]);
            dealer[i].reveal = i === 0 ? false : true;
            id--;
            player.push(newDeck[id]);
            player[i].reveal = false;
            id--;
        }
        setBet(e.target.getAttribute('data'));
        setDealerHand([...dealer]);
        setPlayerHand([...player]);
        setDeck(newDeck);
        setCardIndex(id)    
        setGameOver(false);
        //
      };
      const checkResult = (dealerHand, playerHand) => {
        const playerValue = getHandValue(playerHand);
        const dealerValue = getHandValue(dealerHand);
        let result = '';
        let isPlayer = true;
          if (playerValue[0] === 21 && playerHand.length === 2){
            result = 'You has Black Jack';
          }else
            if (dealerValue[0] === 21 && dealerHand.length === 2){
              result = "Dealer has Black Jack";
              isPlayer = false;
            }else
            if (playerValue[0] > 21) {
                result = 'You has gone bust!';
                isPlayer = false;
            } else if (dealerValue[0] > 21) {
                result = 'Dealer has gone bust!';
            } else if (playerValue[0] > dealerValue[0]) {
                result = "You win!";
            }else if (playerValue[0] < dealerValue[0]) {
                result = "Dealer win!";
                isPlayer = false;
            }else {
                result = "Draw!";
          }
        return [result, isPlayer];
      }
      const hit = () => {
        let allowHit = true;
        for (let i = 0; i < playerHand.length; i++ ){
            if (!playerHand[i].reveal){
                allowHit = false;
                break;
            }
        }
        if (!allowHit){
          //allow player to hit only when all cards are revealed
        }else if (playerHand.length === 5){
          //limit cards to 5
        }else  {
            setPlayerHand([...playerHand, deck[cardIndex]]);
            setCardIndex(cardIndex - 1);
        }
      };
      
      const stand = () => {
        const dealerBot = dealerHand;
        let idx = cardIndex;
        while (getHandValue(dealerBot)[0] < 17 && dealerBot.length < 5){
            dealerBot.push(deck[idx]);
            idx--;
        }
        setDealerHand(dealerBot);
        setCardIndex(idx);
        setGameOver(true);
        let result = checkResult(dealerBot, playerHand);
        setMessage(result[0]);
        setBudget(result[1] ? parseInt(budget) + parseInt(bet) : parseInt(budget) - parseInt(bet));
        localStorage.setItem('budget', result[1] ? parseInt(budget) + parseInt(bet) : parseInt(budget) - parseInt(bet));
      };


    return (
        <Wrapper>
        {gameOver && !isInitial && <ResultModal msg={message} handleReturn={handleReturn}/>}
        <Container fluid className={`${classes.game} text-center`} style={style}>
            <Row><h1 className={`${classes.budget}`}>Budget:{budget}$</h1></Row> 
            <Row>
                <GameControl gameOver={gameOver} startGame={startGame} hit={hit} stand={stand} budget={budget}/>
            </Row>
            <Row className={`${classes["board-control"]}`}>
            <Row >
              {!isInitial && <h2 className={`${classes.hand}`}>Dealer's Hand</h2>}
            </Row>
            <Row>
                <Col xl={2}></Col>
                <Col className={`${classes["card-holder"]} d-flex align-items-center justify-content-center`}>
                    {dealerHand.map((item,index) =>(<Card card={item} key={index} gameOver={gameOver} isDealer={true}/>))}
                </Col>
                <Col xl={2}></Col>
            </Row>
            <Row >
                <Col xl={2}></Col>
            </Row>
            </Row>
            

            <Row className={`${classes["board-control"]}`}>
              <Row>
                {!isInitial && <h2 className={`${classes.hand}`}>Player's Hand</h2>}
              </Row>
              <Row>
                  <Col xl={2}></Col>
                  <Col  className={`${classes["card-holder"]} d-flex align-items-center justify-content-center`}>
                      {playerHand.map((item,index) =>(<Card card={item} key={index} gameOver={gameOver}/>))}
                    </Col>
                  <Col xl={2}></Col>
              </Row>
            </Row>
            
            <footer className={`${classes["back-to-menu"]}`}>
                    <button onClick={handleReturn} className={`${classes["custom-btn"]}`}>
                    Back To Menu
                    </button>             
            </footer>
            
        </Container>
        </Wrapper>
        
    )
}

export default Game;
import React from "react";
import { Button, Container, Figure ,Row, Col} from "react-bootstrap";
import { PlayingCard } from "../PlayingCard/PlayingCard";
import classes from "./Game.module.css";
import Wrapper from "../Helpers/Wrapper";
import c from '../../assets/Rank=2, Suit=Clubs.png'
const style = {
    backgroundColor: "#1A0033",
}
const Game = ({handleReturn}) =>{

    return (
        <Container fluid className={`${classes.game}`} style={style}>
            <Row>
                <Col className={`{}sx-6`}></Col>

            </Row>
            <Row>
                {/* <PlayingCard></PlayingCard> */}
            </Row>
            <Row>
            <Button onClick={handleReturn} className={`position-absolute ${classes["return-btn"]}`}>Return to menu</Button>    
            </Row>
            
        </Container>
        
    )
}

export default Game;
import React, {useState, useRef, useEffect} from "react";
import { Figure,Image } from "react-bootstrap";
import Wrapper from '../../Helpers/Wrapper';
import Back  from '../../../assets/Card Back.png'
// import classes from './Card.module.css';
import './Card.css';
const Card = ({card, gameOver, isDealer}) => {
    const [isRevealed, setIsRevealed] = useState(card.reveal);
    useEffect(() => {
        setIsRevealed(card.reveal);
    })
    const flipping = () => {
        setIsRevealed(true);
        card.reveal = true;
    }
    return (
         
        <Wrapper>
            <div className={["flip-card"]}>
                <div className={`card__inner ${(isRevealed || (gameOver)) ? "is-flipped": null}`} onClick={(e) => !isDealer && flipping()}>
                    <div className={`card__face card__face--front`}>
                        <Image fluid src={Back} alt="" width={150}/>
                    </div>
                    <div className={`card__face card__face--back`}>
                        <Image fluid src={card.image}  alt="" width={150}/>
                    </div>
                </div>
	        </div>
        </Wrapper>

    );
}

export default Card;
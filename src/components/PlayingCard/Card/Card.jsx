import React, {useState} from "react";
import { Figure } from "react-bootstrap";
import Wrapper from '../../Helpers/Wrapper';
import Back  from '../../../assets/Card Back.png'
const Card = (props) => {
    const {card} = props;
    const [isBackCard, setIsBackCard] = useState(true);
    const [img, setImg] = useState(Back);
    const onClickBackCard = (e) =>{
        setIsBackCard(false);
        setImg(card.image);
        console.log(img);
    }
    const onClickFrontCard = (e) =>{
        setIsBackCard(true);
        setImg(Back);
        console.log(img);
    }
    return (
        <Wrapper>
        {isBackCard ? ( <Figure.Image width={200} src={img} onClick={onClickBackCard}/>)
        : (!isBackCard && <Figure.Image width={200} src={img} onClick={onClickFrontCard}/>)}
        
        </Wrapper>

    );
}

export default Card;
import React from 'react'
import { Button, Container,Row, Col,Card ,Image} from 'react-bootstrap';
import Wrapper from '../Helpers/Wrapper';
import classes from './Help.module.css';
import HeartA from '../../assets/Rank=A, Suit=Heart.png'
import Heart10 from '../../assets/Rank=10, Suit=Heart.png'
import HeartK from '../../assets/Rank=K, Suit=Heart.png'
import Heart2 from '../../assets/Rank=2, Suit=Heart.png'
import Heart9 from '../../assets/Rank=9, Suit=Heart.png'
import Heart3 from '../../assets/Rank=3, Suit=Heart.png'
import Clubs6 from '../../assets/Rank=6, Suit=Clubs.png'
import ClubsK from '../../assets/Rank=K, Suit=Clubs.png'
import Spades9 from '../../assets/Rank=9, Suit=Spades.png'
import ClubsQ from '../../assets/Rank=Q, Suit=Clubs.png'
import to from '../../assets/TO.png'
const Help = ({handleReturn}) => {
  
  return (
    // <Wrapper>
      <Container className={`${classes.container} text-center`}>
        <Row className={classes.container__control}>
          <h1 className={classes.help}><img className={`${classes.logo}`}  src="https://cdn-icons-png.flaticon.com/512/1983/1983632.png" alt='logo black jack'/> <br/>BLACK JACK<br/> RULES</h1>
          
        </Row>
        <Row className={classes.container__control}>
          <Col><div className="card-values text-center">
            <h2 className={classes.help}>CARD VALUES</h2>
          </div></Col>
        </Row>
        
        <Row className={`d-flex align-items-center justify-content-center ${classes["card-values"]} ${classes.container__control}`}>
          {/* COL 1 */}
          <Col lg={2} md={2} className={classes.col}>
              <Row className={`${classes["display-card"]}`}>
                <Col><Image fluid src={HeartA} /></Col>
              </Row>
          </Col>
          {/* COL 2 */}
          <Col lg={4} md={6} className={classes.col}>
            <Row className={`${classes["display-card"]}`}>
              <Col><Image fluid src={Heart10}/></Col>
              <Col><Image fluid src={to} style={{width: "100px"}}/></Col>
              <Col><Image fluid src={HeartK} /></Col>
            </Row>
          </Col>
          {/* COL 3 */}
          <Col lg={4} md={6} className={classes.col}>
              <Row className={`${classes["display-card"]}`}>     
                <Col ><Image fluid src={Heart2} /></Col>
                <Col><Image fluid src={to} style={{width: "100px"}}/></Col>
                <Col ><Image fluid src={Heart9}/></Col>
              </Row>
          </Col>
        </Row>

        <Row className={`${classes.container__control} ${classes["rules-content"]}`}>
          <Col lg={8}>
            <p>The primary object is to beat the dealer without going <u><strong><span>over 21</span></strong></u> or making them <u><strong><span>bust.</span></strong></u></p>
          </Col>
          <Col lg={4}  className={`${classes["card-holder"]}`}>
            <Image src={HeartA} className={`${classes.card_1}`}/>
            <Image src={Spades9} className={`${classes.card_2}`}/>
          </Col>
        </Row>

        <Row className={`${classes.container__control} ${classes["rules-content"]}`} >
          <Col lg={4} className={`${classes["card-holder"]}`}>
            <Image fluid src={Spades9} className={`${classes.card_3}`}/>
            <Image fluid src={Heart3} className={`${classes.card_4}`}/>
          </Col>
          <Col lg={8}>
            <p >The dealer deals each player with <u><strong><span>2 face up cards.</span></strong></u> Deals himself <u><strong><span>1 face up</span></strong></u> and <u><strong><span>1 face down.</span></strong></u></p>
          </Col>
        </Row>

        <Row className={`${classes.container__control} ${classes["rules-content"]}`}>
          <Col lg={8}>
            <p>Player can <u><strong><span>Hit</span></strong></u> to ask for an <u><strong><span>extra card</span></strong></u> and <u><strong><span>Stand</span></strong></u> if it <u><strong><span>doesn't</span></strong></u> wish to <u><strong><span>draw</span></strong></u> anymore.</p>
          </Col>
          <Col lg={4}  className={`${classes["card-holder"]}`}>
            <Image src={ClubsK} className={`${classes.card_1}`}/>
            <Image src={Spades9} className={`${classes.card_2}`}/>
          </Col>
        </Row>

        <Row className={`${classes.container__control} ${classes["rules-content"]}`} >
          <Col lg={4} className={`${classes["card-holder"]}`}>
            <Image fluid src={ClubsQ} className={`${classes.card_3}`}/>
            <Image fluid src={Heart3} className={`${classes.card_4}`}/>
          </Col>
          <Col lg={8}>
            <p>After player's action, the<u><strong><span> dealer decides</span></strong></u> whether they want to <u><strong><span>Hit or Stand.</span></strong></u></p>
          </Col>
        </Row>
        <Row className={`${classes.container__control} ${classes["rules-content"]}`}>
          <Col lg={8}>
            <p>The player <u><strong><span>loses</span></strong></u> if his hand goes <u><strong><span>over 21</span></strong></u> or the <u><strong><span>dealer's</span></strong></u> hand is <u><strong><span>closer to 21.</span></strong></u></p>
          </Col>
          <Col lg={4}  className={`${classes["card-holder"]}`}>
            <Image src={HeartA} className={`${classes.card_1}`}/>
            <Image src={Clubs6} className={`${classes.card_2}`}/>
          </Col>
        </Row>
        <footer className={`${classes["back-to-menu"]}`}>
                    <button onClick={handleReturn} className={`${classes["custom-btn"]}`}>
                    Back To Menu
                    </button>             
            </footer>
      </Container>
      
    // </Wrapper>
  )
}

export default Help;


// rule image : https://betandbeat.com/wp-content/uploads/2022/03/Blackjack-Rules.png

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
import Spades9 from '../../assets/Rank=9, Suit=Spades.png'
import to from '../../assets/TO.png'
const Help = ({handleReturn}) => {
  
  return (
    // <Wrapper>
      <Container className={classes.container}>
        <Row>
          <h1 className='h1'>BLACK JACK</h1>
          <h2>RULES</h2>
        </Row>
        <Row>

          <Col><div className="card-values text-center">
            <h2>CARD VALUES</h2>
          </div></Col>
          
        </Row>
        
        <Row className={`d-flex align-items-center justify-content-center ${classes["card-values"]}`}>
          {/* COL 1 */}
          <Col className={classes.col}>
            <Card className={classes.card}>
              <Row>
                <Col><Image src={HeartA} /></Col>
              </Row>
              
              <Card.Body className={classes["card-body"]}>
                <Card.Title className='text-center'>1 OR 11</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/* COL 2 */}
          <Col  className={classes.col}>
          <Card className={classes.card}>
            <Row>
              <Col><Image src={Heart10}/></Col>
              <Col><Image src={to} style={{width: "50px"}}/></Col>
              <Col><Image src={HeartK} /></Col>
              
            </Row>
            <Card.Body  className={classes["card-body"]}>
                <Card.Title className='text-center'>10</Card.Title>
              </Card.Body>
          </Card>
              
          </Col>
          {/* COL 3 */}
          <Col className={classes.col}>
          <Card className={classes.card}>
              <Row>     
                <Col ><Image src={Heart2} /></Col>
                <Col><Image src={to} style={{width: "50px"}}/></Col>
                <Col ><Image src={Heart9}/></Col>
              </Row>
                <Card.Body className={classes["card-body"]}>
                  <Card.Title className='text-center'>FACE VALUES</Card.Title>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <p className={`${classes["rules-content"]}`}>The primary object is to beat the dealer without going <u><strong><span>over 21</span></strong></u> or making them <u><strong><span>bust.</span></strong></u></p>
          </Col>
          <Col lg={4} className={`${classes["card-holder"]}`}>
            <Image src={HeartA} className={`${classes.card_1}`}/>
            <Image src={Spades9} className={`${classes.card_2}`}/>
          </Col>
        </Row>
        <Button onClick={handleReturn}>Return</Button>
      </Container>
      
    // </Wrapper>
  )
}

export default Help;


// rule image : https://betandbeat.com/wp-content/uploads/2022/03/Blackjack-Rules.png

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import config from './Config.json';
import X from '../images/X.svg';
import git from '../images/git.png';
import linkedin from '../images/linkedin.png';


let cardArr = config;

function Champcard() {
    return (
      <div className='row' style={{ marginTop: '150px',marginLeft: '150px' }}>
    
       
    {cardArr.map( (eachcard,index) => (
      <div key={index} style={{ width: '33.33%', padding: '30px', boxSizing: 'border-box', float: 'left'}}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='X.png' />
          <Card.Body>
            <Card.Title>{eachcard.title}</Card.Title>
            <Card.Text>
              {eachcard.text}
            </Card.Text>
            <Button variant="primary" href={eachcard.link}>Info</Button>
          </Card.Body>
        </Card>
        </div>
        ))}
        </div>
      );
}

export default Champcard;
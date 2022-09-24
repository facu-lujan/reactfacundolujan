import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card() {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPhone 11</Card.Title>
        <Button variant="primary">Compra Ahora!</Button>
      </Card.Body>
    </Card>
      
  );
}

export default Card;
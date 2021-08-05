import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const CitySelector = ({onSelectButtonClick}) => {
  const [city, setCity] = useState(null);
  return (
    <>
      <Row>
        <Col><h1>Hello, Select your city!</h1></Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl 
            placeholder="Enter City" 
            onChange={(e) => setCity(e.target.value)} 
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSelectButtonClick(city)}>
            Check Weather
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CitySelector;

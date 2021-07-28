import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherCard = ({dt, min, max, main, icon}) => {
  const date = new Date(dt);
  return(
    <Card>
      <Card.Img variant="top" 
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</p>
        <p>
          {date.getHours()}:
          {date.getMinutes().toString().padStart(2, '0')}:
          {date.getSeconds().toString().padStart(2, '0')}
        </p>
        <p>Min: {min}</p>
        <p>Max: {max}</p>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard;

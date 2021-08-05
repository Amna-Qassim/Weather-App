import React from 'react';
import CitySelector from './Components/CitySelector';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import { baseUrl} from './Config';
import WeatherList from './Components/WeatherList';
import './App.css';
require('dotenv').config();


function App() {
  const {data, error, inProgress, setUrl} = UseFetch();

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && inProgress) return <h2>Loading...</h2>
    if (!data) return null;
    return <WeatherList weathers={data.list}/>;
  };
  return (
    <Container className="App">
      <CitySelector onSelectButtonClick={(city) => 
      setUrl(`${baseUrl}/data/2.5/forecast?q=${city}&cnt=5&appid=${process.env.REACT_APP_API_KEY}&units=metric`)} />

      {getContent()}
      
    </Container>
  );
  }

export default App;

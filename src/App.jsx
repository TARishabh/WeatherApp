import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Weather from './components/Weather';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [cityName, updatedCityName] = useState('')
  const [pageNumber, updatedPageNumber] = useState('');
  const [weatherData, updatedWeatherData] = useState(null);


  const handleOnChange = (e) => {
    updatedCityName(e.target.value);
  }

  const PageNumberHandleOnChange = (e) => {
    updatedPageNumber(e.target.value);
  }

  const pageNumberOnClick = () => {
    handleOnClick();
  }

  const handleOnClick = async () => {
    const api_call = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=16d264f860fb43bcb2294704230311&q=${cityName}&days=${pageNumber}`);
    const parsed_res = await api_call.json();
    updatedWeatherData(parsed_res);
  }

  useEffect(() => {
    const loadDefaultData = async () => {
      const defaultCity = 'Indore';
      const defaultDays = 1
      const api_call = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=16d264f860fb43bcb2294704230311&q=${defaultCity}&days=${defaultDays}`);
      const parsed_res = await api_call.json();
      updatedCityName(defaultCity);
      updatedPageNumber(defaultDays);
      updatedWeatherData(parsed_res);
    }
    loadDefaultData();
  }, []);

  return (
    // <Router>
    //   <>
    //     <Routes>
    //       <Route exact path='/' element={<Navbar cityName={cityName} handleOnChange={handleOnChange} handleOnClick={handleOnClick} PageNumberHandleOnChange={PageNumberHandleOnChange} pageNumberOnClick={pageNumberOnClick} pageNumber={pageNumber}/>}/>
    //       <Route exact path='/?' element={<Navbar cityName={cityName} handleOnChange={handleOnChange} handleOnClick={handleOnClick} PageNumberHandleOnChange={PageNumberHandleOnChange} pageNumberOnClick={pageNumberOnClick} pageNumber={pageNumber}/>}/>
    //       <Route exact path='/' element={<Weather weatherData={weatherData} />}/>
    //       <Route exact path='/?' element={<Weather weatherData={weatherData} />}/>
    //     </Routes>
    //   </>
    // </Router>
    <>
      <Navbar cityName={cityName} handleOnChange={handleOnChange} handleOnClick={handleOnClick} PageNumberHandleOnChange={PageNumberHandleOnChange} pageNumberOnClick={pageNumberOnClick} pageNumber={pageNumber}/>
      <Weather weatherData={weatherData} />
    </>
  )
}


